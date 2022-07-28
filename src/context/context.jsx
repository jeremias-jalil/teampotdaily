import { createContext, useContext, useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { backgroundColorTimeLimit, colorGalery, facilitatorModeValues } from "../utils/constants";
import { timeFormat } from "../utils/genericFunction";


const appContext = createContext()

export function AppContextProvider({ children }) {
    const [teamMembers, setTeamMembers] = useState([])
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
        start: startTotal,
        pause: pauseTotal,
        reset: resetTotal,
    } = useStopwatch({ autoStart: false });

    const updateTeamMembers = (list) => {
        setTeamMembers(list)
    }

    const updateTeamAsistent = (data) => {
        resetTotal()
        pauseTotal()
        const list = data.split('\n').filter((e) => e !== "")
        let randomColor
        const formatDataSpinn = list.map(e => {
            const randomColorNumber = Math.floor(Math.random() * (colorGalery.length - 1))
            let newRandomColor = colorGalery[randomColorNumber]
            while (newRandomColor === randomColor) {
                newRandomColor = colorGalery[randomColorNumber + 1]
            }
            randomColor = newRandomColor
            return { option: e, style: { backgroundColor: randomColor } }
        })
        setSpinnData(formatDataSpinn)
        setSelectList(formatDataSpinn)
        setTeamAsistent(list)
        localStorage.setItem("teampot", data)
    }

    const updateDailyList = (list) => {
        setDailyList(list)
    }

    const updateWinner = (name) => {
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
            'event':'userTime',
            'userTime': timeLimitStep,
        });
        const newSpinnData = [...spinnData]
        if (cont) {
            const user = newSpinnData.splice(prizeNumber, 1)
            if (!skip) {
                updateDailyList([{ name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }, ...dailyList])
            }
        }
        const newPrizeNumber = winnerNumber ?? Math.floor(Math.random() * newSpinnData.length)
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
        setTeamAsistent([...teamAsistent, name])
        setSpinnData([...spinnData, { option: name, style: { backgroundColor: randomColor } }])
        setSelectList([...selectList, { option: name, style: { backgroundColor: randomColor } }])
    }


    const finish = () => {
        pause()
        pauseTotal()
        const newSpinnData = [...spinnData]
        const user = newSpinnData.splice(prizeNumber, 1)
        const newDailyList = [{ name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }, ...dailyList]
        window.dataLayer.push({
            'event':'dailyData',
            'totalTime': `${timeFormat(minutesTotal)}:${timeFormat(secondsTotal)}`,
            'selectMode': `${facilitatorMode}`, 
            'dailySetTime': `${timeLimit}`, 
            'teamMembers': `${newDailyList.length}`,
        });
        let newLoser = {}
        switch (facilitatorMode) {
            case facilitatorModeValues.hotest:
                newLoser = newDailyList.sort((a, b) => (b.seconds + b.minutes * 60) - (a.seconds + a.minutes * 60))[0]
                break;
            case facilitatorModeValues.random:

                newLoser = [...newDailyList].splice(Math.floor(Math.random() * newDailyList.length), 1)[0]
                break;
            case facilitatorModeValues.noSelect:
                newLoser = {}
                break;
            default:
                newLoser = {}
                break;
        }
        updateDailyList(newDailyList.sort((a, b) => (b.seconds + b.minutes * 60) - (a.seconds + a.minutes * 60)))
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
        setMacilitatorMode
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