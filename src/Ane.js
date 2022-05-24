import { isOriginal } from "./utils"

export class Ane {
    constructor () {
        if (this.data) {
            const data = this.data()
            this.addObserver(data)
        }
        this.__children__ = []
        const node = this.render()
        this.__node__ = typeof node === 'string' ? document.createTextNode(node) : node
    }

    addObserver(data) {
        if(isOriginal(data))
            return
        const vm = this
        if(Array.isArray(data)){
            for(let i = 0; i < data.length; i){
                vm.addObserver(data[i])
            }
        } else {
            for(const key in data) {
                Object.defineProperty(vm, key, {
                    get () {
                        return data[key]
                    },
                    set (val) {
                        vm.addObserver(data[key], vm[key])
                        data[key] = val
                    }
                })
                vm.addObserver(data[key], vm[key])
            }
        }
    }

    mount (node) {
        node.appendChild(this.__node__)
    }

    render () {
        return Ane.createElement('Hello world!')
    }

    static createElement (type, options, ...children) {
        let el
        if (typeof type === 'string' && options) {
            el = document.createElement(type)
            const { style } = options
            for(const styleName in style) {
                el.style[styleName] = style[styleName]
            }
        }
        else if (type instanceof Ane) {
            el = type.__node__
        }
        else if (type instanceof HTMLElement) {
            el = type
        }
        else {
            el = document.createTextNode(type)
        }
        this.__children__ = children
        for(const child of children) {
            el.appendChild(Ane.createElement(child))
        }
        console.log('el finall', el);
        return el
    }
}
