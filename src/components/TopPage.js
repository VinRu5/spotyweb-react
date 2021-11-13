import React, {useState} from "react";


export default function TopPage () {
    
    const originalNavList = [
        {
            text: 'in evidenza',
            clicked: false,
        },
        {
            text: 'podcast',
            clicked: false,
        },
        {
            text: 'classifiche',
            clicked: false,
        },
        {
            text: 'generi e mood',
            clicked: false,
        },
        {
            text: 'nuove uscite',
            clicked: false,
        },
        {
            text: 'scopri',
            clicked: false,
        },
    ];

    const [navList, setNavList] = useState(originalNavList);

    const handleNavList = (index)=> {
        console.log(index);
        const originalItem = navList[index];
        const newList = originalNavList;
        newList.splice(index, 1, {...originalItem, clicked: true});
        setNavList([...newList]);
    }

    console.log(navList);
    return (
        <div className="top-page container">
            <ul>
                {
                    navList.map((itemList, index)=> 
                        <li 
                            className={itemList.clicked ? 'clicked' : ''} 
                            key={index}
                            onClick={()=> handleNavList(index)}
                        >
                            {itemList.text.toUpperCase()}
                            <div className={itemList.clicked ? 'under-green' : ''}></div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}