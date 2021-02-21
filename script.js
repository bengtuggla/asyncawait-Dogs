
/* async function test2(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()

    createBreedList(data.message);
}

test2() */
async function test2(){
 try {
   const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    createBreedList(data.message);
 } catch (e) {
   console.log('There was a problem fetching the doglist');
 }
}

test2()

function createBreedList(breedList){
    const myDiv = document.querySelector('.myDiv');
    myDiv.innerHTML = 

    `<select onchange="showDog(this.value)">
        <option>Hundraser</option>
    ${Object.keys(breedList).map((item)=>{
        return `<option>${item}</option>`
    }).join('')}
    </select>
    `
}

async function showDog(dog){
    if(dog != 'Hundraser'){
        const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`)
        const data = await response.json()
        dogShow(data.message)
    }
}

function dogShow(url){
    const dogShow = document.querySelector('.dogShow')
    dogShow.innerHTML = `<img width= "400px " src="${url[0]}" alt="">`

}
