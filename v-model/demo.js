// Observer实现
let person = {}
let val = 'jimmy'
Object.defineProperty(person, 'name', {
    get: function(){
        console.log('get')
        return val
    },
    // setter 发布、通知消息
    set: function(newVal){
        console.log('set')
        val = newVal
    }
})
person.name = 'james'   //set

// Dep实现
function Dep() {
    // 所有订阅者watcher集合
    this.subs = []
}
Dep.prototype = {
    addSub: sub => {
        this.subs.push(sub)
    },
    notify: () => {
        this.subs.forEach(sub => sub.update())
    }
}
Dep.target = null
