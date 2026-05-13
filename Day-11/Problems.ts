//ques-1


// async function fetchData<T>(url: string): Promise<T>{
//     try{
//         let res = await fetch(url);

//         if(!res.ok){
//             throw new Error("failed to fetech the data");
//         }

//         const data:T = await res.json();
//         return data;
//     } catch(error){
//         throw error;
//     }
    
// }

// interface Album{
//     userId: number;
//     id: number;
//     title: string;
// }

// async function getAlbum(){
//     const data = await fetchData<Album>("https://jsonplaceholder.typicode.com/albums");

//     console.log(data);

// }

// getAlbum();






//ques-2

// enum Role{
//     Admin,
//     Editor,
//     Guest
// }


// const PermissionMap : Record <Role,boolean> ={
//     [Role.Admin]: true,
//     [Role.Editor]: true,
//     [Role.Guest]: false,

// };

// console.log(PermissionMap);





//ques-3


// type TaskStatus = 'Open' | 'InProgress' | 'Closed' |'Archived';

// function handleTask(status: TaskStatus) {

//     switch (status) {

//         case 'Open':
//             console.log("Task is open");
//             break;

//         case 'InProgress':
//             console.log("Task is in progress");
//             break;

//         case 'Closed':
//             console.log("Task is closed");
//             break;

//         case 'Archived':
//             console.log("Task is archived");
//             break;

//         default:
//             const exhaustiveCheck: never = status;
//             return exhaustiveCheck;
//     }
// }



//ques-4
// type FolderNode = {
//     name: string;
//     files?: string[];
//     subFolders?: FolderNode[];
// };

// const folderStructure: FolderNode = {
//     name: "Root",

//     files: ["index.html", "style.css"],

//     subFolders: [
//         {
//             name: "Images",

//             files: ["logo.png", "banner.jpg"]
//         },

//         {
//             name: "Projects",
//             subFolders: [
//                 {
//                     name: "React-App",

//                     files: ["App.tsx", "main.tsx"]
//                 }
//             ]
//         }
//     ]
// };




//ques-5


// type MarginValue =
//     `${number}px`
//     | `${number}rem`
//     | `${number}vh`;

// let margin1: MarginValue = "10px";
// let margin2: MarginValue = "2rem";
// let margin3: MarginValue = "50vh";

// console.log(margin1);
// console.log(margin2);
// console.log(margin3);





//ques-6

// type UnwrapPromise<T> =
//     T extends Promise<infer U> ? U : T;



// type A = UnwrapPromise<Promise<string>>;
// type B = UnwrapPromise<Promise<number>>;
// type C = UnwrapPromise<boolean>;


// let value1: A = "Hello";
// let value2: B = 100;
// let value3: C = true;

// console.log(value1);
// console.log(value2);
// console.log(value3);



//ques-7

type AllEvents =
    | 'click'
    | 'dbclick'
    | 'submit'
    | 'reset'
    | 'keypress';


type MouseEvents = Extract<
    AllEvents,
    'click' | 'dbclick'
>;

type NonFormEvents = Exclude<
    AllEvents,
    'submit' | 'reset'
>;

let event1: MouseEvents = 'click';
let event2: MouseEvents = 'dbclick';

let event3: NonFormEvents = 'click';
let event4: NonFormEvents = 'keypress';

console.log(event1);
console.log(event2);
console.log(event3);
console.log(event4);