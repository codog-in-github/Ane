import { Ane } from "./Ane";

export class Counter extends Ane {
    data () {
        return {
            count: 0
        }
    }

    render () {
        return Ane.createElement('div', { style: { color: 'red' } }, new Counter2())
    }
}


class Counter2 extends Ane {
    data () {
        return {
            count: 5
        }
    }

    render () {
        return 'Hello Ane ! counter :' + this.count
    }
}
