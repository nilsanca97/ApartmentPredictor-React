import { apartments } from "../data/apartments";

export default function HomeListRender() {
    const listItems = apartments.map((apartment) => (
        <tr>
            <td>{apartment.id}</td>
            <td>{apartment.title}</td>
            <td>{apartment.price}</td>
        </tr>
    ));

    return (
        <>
            <h1>Apartments</h1>
            <p>This is an exercise to test react render</p>
            <table>
                <tr>
                <th>APARTMENT ID</th>
                <th>TITTLE</th>
                <th>PRICE</th>
                <th>DETAILS</th>
                </tr>
                {listItems}
            </table>    
        </>
    );
}