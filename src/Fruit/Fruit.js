import React, {
    Component
} from 'react';
export default class Fruit extends Component {
    state = {
        fruits: [{
                name: 'durian',
                rating: "best"
            },
            {
                name: 'mango',
                rating: "good"
            },
            {
                name: 'apple',
                rating: "ok"
            }
        ]
    }
    render() {
        let fruitLis = this.state.fruits.map((fruit,id)=>{return <li key={id}>{fruit.name}</li>})
        return (
            <ul>
                {fruitLis}
            </ul>
        )
    }
}