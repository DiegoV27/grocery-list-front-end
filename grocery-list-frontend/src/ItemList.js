import React, {useState} from "react"

const BASE_URL = "http://localhost:9292/items"

export function GroceryList() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(r => r.json())
            .then(data => setItems(data))
    }, [])

    return(
        <div>
            <ul className="groceries">
                <li>Grapes</li>
                <li>Bread</li>
                <li>Chicken</li>
                <li>Ginger</li>
            </ul>
        </div>
    )
}

