import { useState, createContext, useContext, } from 'react'
import { useStopwatch } from 'react-timer-hook';


const appContext = createContext()

const backgroundColorTimeLimit = {
    1: "#000000",
    2: "#570000",
    3: "#8d0000",
    4: "#bd000057",
    5: "#e60000a4",
    6: "#ff0000"
}

const colorGalery = [
    "#4b382",
    "#826B59",
    "#ABA08A",
    "#653310",
    "#895710",
    "#BC9C63",
    "#973C16",
    "#DF7400",
    "#DDCA54",
    "#3C4F18",
    "#5C8C28",
    "#B8D094",
    "#4C6174",
    "#8193A1",
    "#A3ACBA"
]

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
    const [pauseFlag, setPauseFlag] = useState(false)


    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

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
        reset()
        pause()
        resetTotal()
        pauseTotal()
        const list = data.split('\n').filter((e) => e !== "")
        const formatDataSpinn = list.map(e => {
            var randomColor = colorGalery[Math.floor(Math.random() * 15)]
            return { option: e, style: { backgroundColor: randomColor } }
        })
        setSpinnData(formatDataSpinn)
        setTeamAsistent(list)
        localStorage.setItem("teampot", data)
    }

    const updateDailyList = (list) => {
        setDailyList(list)
    }

    const updateWinner = (name) => {
        setSpinnerOn(false)
        setWinner(name)
    }

    const updateTimeLimit = (time) => {
        setTimeLimit(time)
    }

    const updateMustSpin = (value) => {
        setMustSpin(value)
    }


    const handleSpinClick = () => {
        setSpinnerOn(true)
        pause()
        const newSpinnData = [...spinnData]
        if (cont) {

            const user = newSpinnData.splice(prizeNumber, 1)
            updateDailyList([...dailyList, { name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }])
        }
        const newPrizeNumber = Math.floor(Math.random() * newSpinnData.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        setSpinnData(newSpinnData)
        setCont(cont + 1)
    }

    const updateTimeLimitStep = (value) => {
        setTmeLimitStep(value)
        document.body.style.backgroundColor = backgroundColorTimeLimit[value]
        value>3? document.body.style.backgroundBlendMode = "darken":document.body.style.backgroundBlendMode = "lighten"
       }

    const getBackgroundColor = () => {
        return backgroundColorTimeLimit[timeLimitStep]
    }

    const finish = () => {
        pause()
        pauseTotal()
        const newSpinnData = [...spinnData]
        const user = newSpinnData.splice(prizeNumber, 1)
        updateDailyList([...dailyList, { name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }])
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
        pauseFlag,
        updateTeamMembers,
        updateTeamAsistent,
        updateDailyList,
        updateWinner,
        updateMustSpin,
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
        setPauseFlag
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