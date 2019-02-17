// src/app/core/pet-tag.action.ts
// 第二步：

//  创建行为类型：  action  被派发到  reducer 中，从而更新store，现在我们为这种行为定义名字。
//  将这些行为都定义为：常量

export const SELECT_SHAPE = 'SELECT_SHAPE';
export const SELECT_FONT = 'SELECT_FONT';
export const ADD_TEXT = 'ADD_TEXT';
export const TOGGLE_CLIP = 'TOGGLE_CLIP';
export const TOGGLE_GEMS = 'TOGGLE_GEMS';
export const COMPLETE = 'COMPLETE';
export const RESET = 'RESET';