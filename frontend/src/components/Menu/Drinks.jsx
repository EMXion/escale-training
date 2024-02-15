import { getAllDrinks } from "../../api/ApiDrinks";
import { useState, useEffect } from 'react';


function Drinks() {
    const [drinks, setDrinks] = useState([]);
    const sourceImg = "../../../public/Img/img-drinks/";

    async function fetchDrinks() {
        try {
            const result = await getAllDrinks();
            setDrinks(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, []);



    return (
        <>
            <div className="drinks template">
                <div className="drinks__content template__content">
                    <div className="drinks__columns">
                        {['Apéritifs', 'Traditions', 'Bières pressions', 'Whiskies', 'Spiritueux', 'Rafraichissements maison', 'Boissons sans alcool', 'Boissons chaudes'].map((label) => (
                            <div key={label} className="drinks__column template__column">
                                <div className="drinks__title">
                                <h2>{label}</h2>
                                </div>
                                
                                <div className="drinks__list template__list">
                                    <table>
                                        <tbody>
                                            {drinks.filter(drinks => drinks.label === label).map((drinks) => (
                                                <tr key={drinks.id}>
                                                    <td>
                                                        <img src={sourceImg + drinks.imgLink + ".jpg"} className="drinks__img template__img" />
                                                    </td>
                                                    <td>
                                                        <span className="drinks__item template__item">{drinks.name}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                
                <div className="drinks__column template__column">
                            <h2>Soft Cocktails</h2>
                            <div className="drinks__list template__list">
                                <table>
                                    <tbody>
                                        {drinks.filter(drink => drink.label === 'Soft Cocktails').map((drink) => (
                                            <tr key={drink.id}>
                                                <td>
                                                    <img src={sourceImg + drink.imgLink + ".jpg"} className="drinks__img template__img" alt={drink.name} />
                                                </td>
                                                <td>
                                                    <span className="drinks__item template__item">{drink.name}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <h2>Eaux régionales</h2>
                            <div className="wine__list template__list">
                                <table>
                                    <tbody>
                                        {drinks.filter(drink => drink.label === 'Eaux régionales').map((drink) => (
                                                <tr key={drink.id}>
                                                    <td>
                                                        <img src={sourceImg + drink.imgLink + ".jpg"} className="drinks__img template__img" alt={drink.name} />
                                                    </td>
                                                    <td>
                                                        <span className="drinks__item template__item">{drink.name}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                             
                                </table>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
    
}
export default Drinks;