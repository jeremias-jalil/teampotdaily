import AcUnitIcon from '@mui/icons-material/AcUnit'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import teapot1inf from '../images/teapot1inf.gif'
import teapot2inf from '../images/teapot2inf.gif'
import teapot3inf from '../images/teapot3inf.gif'
import teapot4inf from '../images/teapot4inf.gif'
import teapot5inf from '../images/teapot5inf.gif'
import teapot6inf from '../images/teapot6inf.gif'


export const setTimeMarks = [
    {
        value: 0,
        label: '0 min',
    },
    {
        value: 5,
        label: '5 min',
    },
    {
        value: 10,
        label: '10 min',
    },
];

export const backgroundColorTimeLimit = {
    1: "#000000",
    2: "#570000",
    3: "#8d0000",
    4: "#bd000057",
    5: "#e60000a4",
    6: "#ff0000"
}

export const colorTimeLimitReference = {
    1: "primary",
    2: "secondary",
    3: "success",
    4: "info",
    5: "warning",
    6: "error"
}

export const colorGalery = [
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

export const emojiTimeLimit = {
    1: "​​❄️​",
    2: "​​​💧​",
    3: "☕",
    4: "🌡️​​",
    5: "♨️",
    6: "🔥",
}

export const iconTimeLimit = {
    1: <AcUnitIcon/>,
    2: <LocalDrinkIcon/>,
    3: <EmojiFoodBeverageIcon/>,
    4: <DeviceThermostatIcon/>,
    5: <BubbleChartIcon/>,
    6: <LocalFireDepartmentIcon/>
}

export const teapotTimeLimit = {
    1: teapot1inf,
    2: teapot2inf,
    3: teapot3inf,
    4: teapot4inf,
    5: teapot5inf,
    6: teapot6inf
}