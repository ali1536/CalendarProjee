function SameName() {
    return (<button> click same name</button>)
}
function ShortHand() {
    return (<button>click shorthand</button>)
}
function DifferentName() {
    return (<button>click different name</button>)
}

//named export
export function NamedExported() {
    return (<button>click named export</button>)
}
export function RenamedExport() {
    return (<button>click renamed export</button>)
}



// default export
const myButton = {
    SameName: SameName, //same named property
    ShortHand, // == ShortHane : ShortHand,
    Motfavet: DifferentName
};
export default myButton;