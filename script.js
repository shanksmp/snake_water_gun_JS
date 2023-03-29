let user_choice = prompt('Choose between snake, water or gun')
let random =['snake', 'water', 'gun']
let comp_choice = random[Math.floor(Math.random() * random.length)]
alert('Computer Choice is '+comp_choice)
if((user_choice=='snake' && comp_choice=='water')||(user_choice=='water' && comp_choice=='gun')||(user_choice=='gun' && comp_choice=='snake'))
{
  alert('You win')
}
else if(user_choice==comp_choice)
{
  alert('Draw')
}
else{
  alert('Computer Wins!')
}

