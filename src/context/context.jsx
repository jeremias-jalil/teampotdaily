import { createContext, useContext, useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { backgroundColorTimeLimit, colorGalery, facilitatorModeValues, emogiList } from "../utils/constants";
import { uuid } from 'uuidv4';
import { timeFormat, getRandomInt, getSpinnTextColor } from "../utils/genericFunction";

const appContext = createContext()

export function AppContextProvider({ children }) {
    const [teamMembers, setTeamMembers] = useState(0)
    const [teamAsistent, setTeamAsistent] = useState([])
    const [dailyList, setDailyList] = useState([])
    const [winner, setWinner] = useState("")
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [spinnData, setSpinnData] = useState([])
    const [cont, setCont] = useState(0)
    const [mustSpin, setMustSpin] = useState(false);
    const [timeLimit, setTimeLimit] = useState(2)
    const [timeLimitStep, setTmeLimitStep] = useState(1);
    const [results, setlResults] = useState(false)
    const [spinnerOn, setSpinnerOn] = useState(false)
    const [voice, setVoice] = useState({})
    const [loser, setLoser] = useState({})
    const [selectList, setSelectList] = useState([]);
    const [facilitatorMode, setMacilitatorMode] = useState(facilitatorModeValues.hotest);
    const [sessionId, setSessionId] = useState('')
    const [emojis, setEmojis] = useState(false)

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    useEffect(() => {
        setVoice(speechSynthesis.getVoices().find(e => e.lang === "es-ES"))

    }, [])

    const {
        seconds: secondsTotal,
        minutes: minutesTotal,
        hours: hoursTotal,
        start: startTotal,
        pause: pauseTotal,
        reset: resetTotal,
    } = useStopwatch({ autoStart: false });

    const updateTeamMembers = (number) => {
        setTeamMembers(number)
    }



    const updateTeamAsistent = (data) => {
        resetTotal()
        pauseTotal()
        const list = data.split('\n').filter((e) => e !== "")
        list.sort(function () { return Math.random() - 0.5 });
        let randomColor
        const formatDataSpinn = list.map(e => {
            const randomColorNumber = getRandomInt(colorGalery.length - 1)
            if (emojis) {
                const randomIcon = getRandomInt(emogiList.length - 1)
                e = e + emogiList[randomIcon]
            }

            let newRandomColor = colorGalery[randomColorNumber]
            while (newRandomColor === randomColor) {
                newRandomColor = colorGalery[randomColorNumber + 1]
            }
            randomColor = newRandomColor
            return { option: e, style: { backgroundColor: randomColor, textColor: getSpinnTextColor(randomColor) } }
        })
        setSpinnData(formatDataSpinn)
        setSelectList(formatDataSpinn)
        setTeamAsistent(list)
        setSessionId(uuid())
        localStorage.setItem("teampot", data)
        localStorage.setItem("settings", JSON.stringify({ timeLimit, facilitatorMode }))

    }

    const updateDailyList = (list) => {
        setDailyList(list)
    }

    const updateWinner = (name) => {
        window.dataLayer.push({
            'event': 'userPosition',
            "sessionId": sessionId,
            'userName': name,
            'position': cont
        });
        reset(undefined, true)
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.voice = voice;
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = name;
        mensaje.pitch = 1;
        speechSynthesis.speak(mensaje)
        const newSelectList = [...spinnData]
        newSelectList.splice(prizeNumber, 1)
        setSelectList(newSelectList)
        setWinner(name)
        updateTimeLimitStep(1)
        setSpinnerOn(false)
        setMustSpin(false)
    }

    const updateTimeLimit = (time) => {
        setTimeLimit(time)
    }

    const updateMustSpin = (value) => {
        setMustSpin(value)
    }

    const handleSpinClick = (skip, winnerNumber) => {
        setSpinnerOn(true)
        pause()
        window.dataLayer.push({
            'event': 'userTime',
            "sessionId": sessionId,
            'userTime': timeLimitStep,
        });
        const newSpinnData = [...spinnData]
        if (cont) {
            const user = newSpinnData.splice(prizeNumber, 1)
            if (!skip) {
                updateDailyList([{ name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }, ...dailyList])
            }
        }
        const newPrizeNumber = winnerNumber ?? getRandomInt(newSpinnData.length - 1)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        setSpinnData(newSpinnData)
        setCont(cont + 1)
    }

    const updateTimeLimitStep = (value) => {
        setTmeLimitStep(value)
        document.body.style.backgroundColor = backgroundColorTimeLimit[value]
        value > 3 ? document.body.style.backgroundBlendMode = "darken" : document.body.style.backgroundBlendMode = "lighten"
    }

    const getBackgroundColor = () => {
        return backgroundColorTimeLimit[timeLimitStep]
    }

    const addNewMember = (name) => {
        var randomColor = colorGalery[Math.floor(Math.random() * 15)]
        if (emojis) {
            const randomIcon = getRandomInt(emogiList.length - 1)
            name = name + emogiList[randomIcon]
        }
        setTeamAsistent([...teamAsistent, name])
        setSpinnData([...spinnData, { option: name, style: { backgroundColor: randomColor } }])
        setSelectList([...selectList, { option: name, style: { backgroundColor: randomColor } }])
    }


    const finish = (skip) => {
        pause()
        pauseTotal()
        const newSpinnData = [...spinnData]
        const user = newSpinnData.splice(prizeNumber, 1)
        let newDailyList = [...dailyList]
        if (!skip) {
            newDailyList = [{ name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }, ...dailyList]
        }
        window.dataLayer.push({
            'event': 'dailyData',
            "sessionId": sessionId,
            'totalTime': `${timeFormat(minutesTotal)}:${timeFormat(secondsTotal)}`,
            'selectMode': `${facilitatorMode}`,
            'dailySetTime': `${timeLimit}`,
            'teamMembers': `${newDailyList.length}`,
        });
        let newLoser = {}
        const sortDailyList = newDailyList.sort((a, b) => (b.seconds + b.minutes * 60) - (a.seconds + a.minutes * 60))
        switch (facilitatorMode) {
            case facilitatorModeValues.hotest:
                const listLoser = sortDailyList
                newLoser.l1 = listLoser[0]
                newLoser.l2 = listLoser[1]
                break;
            case facilitatorModeValues.random:
                const loserList = [...newDailyList]
                newLoser.l1 = loserList.splice(getRandomInt(loserList.length - 1), 1)[0]
                newLoser.l2 = loserList.splice(getRandomInt(loserList.length - 1), 1)[0]
                break;
            case facilitatorModeValues.noSelect:
                newLoser = {}
                break;
            default:
                newLoser = {}
                break;
        }
        updateDailyList(sortDailyList)
        setLoser(newLoser)
        reset()
        pause()
        setWinner("")
        setlResults(true)
    }

    const resetAll = () => {
        setCont(0)
        setSpinnData([])
        setTeamAsistent([])
        setDailyList([])
        resetTotal()
        pauseTotal()
        reset()
        pause()
        setPrizeNumber(null)
        setMustSpin(false)
        setWinner("")
        setlResults(false)
        setLoser({})
    }

    const providerData = {
        teamMembers,
        teamAsistent,
        dailyList,
        seconds,
        minutes,
        isRunning,
        winner,
        mustSpin,
        prizeNumber,
        spinnData,
        cont,
        timeLimitStep,
        timeLimit,
        secondsTotal,
        minutesTotal,
        hoursTotal,
        results,
        spinnerOn,
        loser,
        selectList,
        facilitatorMode,
        updateTeamMembers,
        updateTeamAsistent,
        updateDailyList,
        updateWinner,
        updateMustSpin,
        addNewMember,
        start,
        pause,
        reset,
        startTotal,
        pauseTotal,
        resetTotal,
        handleSpinClick,
        updateTimeLimitStep,
        getBackgroundColor,
        updateTimeLimit,
        resetAll,
        setlResults,
        finish,
        setSpinnerOn,
        setMacilitatorMode,
        setEmojis

    }

    return (
        <appContext.Provider value={providerData} >
            {children}
        </appContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(appContext)
    if (!context) {
        throw new Error('Error en useContext')
    } else {
        return context
    }

}