// 第一步： 

// 宠物标签模型： 声明宠物标签的属性和类型， 

export class PetTag {
    constructor(
        public shape: string,
        public font: string,
        public text: string,
        public clip: boolean,
        public gems: boolean,
        public complete: boolean
    ) {}
}

//  定义一个常量作为宠物的默认初始值，在初始化和重置状态时需要用到
export const initialTag: PetTag = {
    shape: '',
    font: 'sans-self',
    text: '',
    clip: false,
    gems: false,
    complete: false
}