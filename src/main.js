import { Ane } from './Ane.js'
import { Counter } from './Counter.comp.js'

class App extends Ane {
    render () {
        return Ane.createElement(
            'div',
            { style: { color: '#ff0000' } },
            new Counter()
        )
    }
}

const app = new App()

app.mount(document.getElementById('app'))