import React from 'react'
import { useState } from 'react'
import "./style.css"

function Recipe() {


    const [details, setdetails] = useState('')
    const [recipe, setrecipe] = useState([
        {
        
         image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/gulab-jamun-recipe-500x500.jpg",
         recipename: "Gulabjamun", 
          details: "Take 1 cup khoya or mawa (200 grams) in a bowl. Soft khoya also known as daap ka khoya or chikna khoya is used. This is a soft khoya, so it mashes and kneads very well. Mash it very well. There should be no lumps or small bits or pieces in the khoya. You can also grate and then mash the khoya. Do not mash too much. Just mash and proceed with the next step. Then add ¾ cup or 100 grams grated paneer, fine rava (semolina), 2 tablespoons all-purpose flour, ¼ teaspoon baking powder and ½ teaspoon cardamom powder to the mashed khoya. There should be no lumps in both the mawa and paneer. If there are lumps, then the texture is not even and smooth. The bits and pieces of mawa or paneer give a bite while eating. Mix well. Add 1 tablespoon milk and gather together to form a dough with milk. Don’t knead. Just gently mix. If you are unable to form balls or if the mixture appears dry, then add a few teaspoons of milk and mix again. Cover the dough and set aside for 30 minutes. Mix 1.75 cups (250 grams) sugar in 1 cup water. On a medium-low flame, heat the sugar solution till it becomes sticky. You just need to switch off the fire before the syrup reaches a one thread consistency. I have used raw sugar which made the syrup have a dark color. The syrup should be sticky and not watery. You can even cook the sugar syrup till it reaches a half-string consistency. Add rose water and stir. Set the sugar solution aside. On cooling, if the sugar syrup crystallizes, then just add 2 to 3 tablespoons water and warm the syrup again. Stir while warming the syrup. The sugar crystals will disappear. After 30 minutes, make small balls from the dough without cracks. Cover the dough balls and set aside. Heat oil until it is medium-hot. Lower the flame to a medium-low or low and wait for a minute. Then gently place the dough balls in the oil. If in case, the dough balls breaks when frying, then add some more maida (about 1 to 2 tablespoons) to the dough. Mix gently again. Set aside for fifteen minutes. Then later fry. You can also check one small piece before frying the rest of the balls. If it breaks, then use the tip mentioned above. Once they start to have tiny golden spots, keep on rotating them in the oil, so that the balls are evenly browned. Since I was taking the photos, I browned a few of them more.  Remove the fried dough balls and then place them on kitchen paper towels to remove extra oil. Place the hot fried dough balls in the sugar syrup. Continue to fry the rest of the dough balls in batches. Later place them while still hot in the sugar syrup. Dont overcook as then they can break. Use a large pan, so that the fried jamun balls are not overcrowded and you can easily stir them gently while they are simmering. Serve gulab jamun warm or at room temperature. You can also chill them and serve them cold. Garnish them with rose petals or almond slivers."
         
        },
   
        { 
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
         recipename: "Paneer Tikka",
         details: "firstly, take ½ cup thick curd / yogurt, further add in all the spices along with salt further add in ½ tsp turmeric, 1 tsp chilli powder, ½ tsp coriander powder, ¼ tsp cumin powder, ½ tsp garam masala, ½ tsp kasuri methi, ½ tsp chaat masala, 1 tsp ginger – garlic paste and ¼ tsp ajwain., mix till all the spices are combined well with curd,now add ½ onion petals, ½ cubed capsicum (red & green) and 5 cubes paneer,also add 1 tsp of oil,mix gently till all the vegetables are coated well,furthermore, to marinate, cover and refrigerate for 30 minutes,after marination, insert the marinated paneer, capsicum and onions into wooden skewers,further, roast it on a hot tawa or grill in oven or tandoor,finally, sprinkle some chaat masala and serve paneer tikka immediately. "
         },
     
        { 
        image: "https://c.recipeland.com/images/r/22063/e1f83d693f535c6923bf_1024.jpg",
         recipename: "Laddoo", 
         details: " To make this traditional Indian sweet at home, take a large bowl to add 2 1/2 cups of gram flour,then mix orange colour and mix it well. Then, add some water and a little baking soda. Blend the mixture well and make sure there are no lumps. Once the blend attains a perfect consistency, it's time to move to the next step. Now, heat ghee in a large deep frying pan. Place a perforated ladle (jhada) on top of the oil and add some of the batter. Slowly let the boondi batter fall in the oil and cook them on a low flame, till properly cooked. Once done, place the boondi on a tissue paper to remove excess oil. Prepare sugar syrup and mix with the boondis Then, take a pan and add some water and sugar, allow this blend to boil until it attains a two- string consistency. Then add some cardamom powder and let it cook. Then add the boondis and cook till the sugar syrup and boondi is perfectly mixed. Cover it with the lid and turn off the flame. Garnish and relish! Grease your hands with a little ghee and start shaping the ladoos. Place them in an open tray and garnish with some crushed nuts and indulge in the goodness.You can add some crushed pistachios or slivered almonds to the ladoos to enhance their taste The batter for Motichoor ladoos should be thin and flowing. Sugar syrup does not need to have any string consistency Try to fry the boondis in ghee for a nicer flavour of your ladoos but you can also use refined vegetable oil."
         }])
   
         let getData = (data) => {
            let displaydetails = recipe[data]
            setdetails(displaydetails.details)
        }
    return (
        <div className='card' style={{width: '90rem'}}>
            <h2>Recipes</h2>
             <div className='row'>
           <div className='col-3' >
            {
                        recipe.map((value, index) => {
                            return <div onClick={()=>{ getData(index) }} className='card bg-info'>
                                <img className='card-img-top' src={value.image} key={index} />
                                <div className='card-body'>
                                 <h4 className='card-title'>{value.recipename}</h4>
                                </div>
                              
                            </div>
                        }) 
            }
                </div>
               
                <div className='col-8'>
                    <h6>{details}</h6>
                </div>
            </div>
        </div>
     
    )
}

export default Recipe