const Design =[
    [
    
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2021/01/portfolio-1.jpg",
           'Having fun in Crust',
           ["Design","Graphic"]
    ],
    [
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2020/11/portfolio-4-1.jpg",
            'Getting tickets to the big show',
           ["Design"]
    ] ,
       [
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2020/11/portfolio-6.jpg",
            'The Ultimate Guide To Agency',
           ["Design","Graphic"]
       ]
    ]
   
const Development =[
    [
    
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2021/01/portfolio-2.jpg",
           'Having fun in Crust',
            ["Development"]
    ],
    [
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2020/11/portfolio-5.jpg",
            'Getting tickets to the big show',
           ["Development"]
    ] 
    ]   
    const Graphic =[
        [
    
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2021/01/portfolio-1.jpg",
           'Having fun in Crust',
           ["Design","Graphic"]
    ],
        [
        
                "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2021/01/portfolio-3.jpg",
               'Having fun in Crust',
               [ "Graphic","WordPress"]
        ] 
        ,
       [
            "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2020/11/portfolio-6.jpg",
            'The Ultimate Guide To Agency',
           ["Design","Graphic"]
       ]
        ]  
 const WordPress =[
            [
            
                    "https://crust.winsomethemes.com/original/wp-content/uploads/sites/81/2021/01/portfolio-3.jpg",
                   'Having fun in Crust',
                   [ "Graphic","WordPress"]
            ] 
            ]  


   const arr = [...Design,...Development,...Graphic,...WordPress];
   function multiDimensionalUnique(arr) {
       var uniques = [];
       var itemsFound = {};
       for(var i = 0, l = arr.length; i < l; i++) {
           var stringified = JSON.stringify(arr[i]);
           if(itemsFound[stringified]) { continue; }
           uniques.push(arr[i]);
           itemsFound[stringified] = true;
       }
       return uniques;
   }
    const All= multiDimensionalUnique(arr);
export default Design;
export {Development,Graphic,WordPress ,All}