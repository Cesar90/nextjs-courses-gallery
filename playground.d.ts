// function logTime<T>(num: T): T{
//   console.log(new Date())
//   return num
// }

// function logTime2<T>(num: T):T {
//   if(typeof num == 'string'){
//     num.toLocaleLowerCase()
//   }
//   return num
// }

// interface MyInterface{
//   transform: <T, F>(a: T) => F
// }

// interface TimeStamp{
//   stamp: number
// }


// logTime<string>('cesar')
// logTime<number>(111)

// const aTuple: [number, string, number] = [0,'a',1]
// const [cTuple, ...rest] = aTuple

// enum Direction{
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT'
// }

// enum Decision{
//   Yes = 1,
//   No = calcEnum()
// }

// function calcEnum(){
//   return 2
// }

// function runEnum(obj: {Up: string}){

// }
// runEnum(Direction)

// enum ETest{
//   A
// }

// let Etest = ETest.A
// let nameA = ETest[Etest] //A

// const enum ConstEnum{
//   A,
//   B
// }

// let cc: 'test' = 'test'

// type ActionType = 'up' | 'down'

// function performAction(action: ActionType | ComplexAction){
//   switch(action){
//     case 'down':
//       return -1
//     case 'up':
//       return 1
//   }
// }

// interface ComplexAction{
//   s: string
// }

// interface Info{
//   desc: string
//   isActive: boolean
// }

// interface Tag{
//   name: string
//   value: string
// }

// interface Reply{
//   userId: number
//   id: number
//   title: number
//   info: Info
//   tags: Tag[]
// }

// type Point = { 
//   x: number,
//   y: number 
// }

// type D3DPoint = Point & {
//   z: number
// }

// interface IPoint{
//   x: number,
//   y: number 
// }

// interface I3DPoint extends IPoint{
//   z: number
// }

// type stringOrNumber = string | number

// const cf = (point: IPoint) => {
//   const d: I3DPoint = point as I3DPoint
// }

// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

// function printCoord(coor: IPoint){

// }

// interface Test{
//   a: number
// }

// interface Test{
//   b: number
// }


// ///INTERFACEEEEEEEEE

// // const a:number = 5
// let a: number = 4
// let b: string = 'sdddsd'
// let c = true

// let d: string[] = ['sdf','sf']
// let e: any = 3
// e = 'sdgdd'

// function test(a: string): number | string{
//   return '';
// }

// const test2 = (a: number) => {
//   return a*2
// }

// d = d.map((x: string) => x.toLowerCase())

// function countCoord(coord: { lat: number, long?: number }){
  
// }

// function printIt(id: number | string){
//   if(typeof id == 'number'){
//     console.log(id.toString())
//   } else if(typeof id == 'string') {
//     id.toLowerCase()
//   }
// }

// function getSum(a: number | number[]){
//   if(Array.isArray(a)){

//   }
// }

// const x: undefined = undefined
