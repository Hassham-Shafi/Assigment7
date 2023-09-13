var firstName=prompt('Enter your first name')
var secondName=prompt('Enter your second name')
var fullName= firstName+' '+secondName
document.write(fullName)


var favoriteMobile=prompt('Enter your favorite mobile phone model.')
document.write('My favorite phone is: '+favoriteMobile+'<br>'+'length of string '+favoriteMobile.length)


var word = "Pakistani";
var indexchar = prompt('The index of any char in "Pakistani" :' )
var index = word.indexOf(indexchar)
document.write('The index of '+ (indexchar) + ' Pakistani is: ' + index);

var word = "Hello World";
var lastIndex = word.lastIndexOf('l');
 document.write("The last index of 'l' in 'Hello World' is: " + lastIndex);


var word = "Pakistani";
var inputIndex=prompt('Enter the index number of any char in "Pakistani"')
var characterAtIndex = word[inputIndex];
document.write('The character at the ' + inputIndex +" index in 'Pakistani' is: " + characterAtIndex);


var city = 'Hyderabad'
document.write('City : '+city+'<br>')
for (var i = 0; i < city.length; i++) {
    var extract = city.slice(i, i + 5)

    if (extract === 'Hyder') {
        city = city.slice(0, i) + 'Islam' + city.slice(i + 5)
    }
}
document.write('After replacement : ',city)

var Message = 'Ali and Sami are best friends. They play cricket and football together'
document.write('Message : '+Message+'<br>')
for (var i = 0; i < Message.length; i++) {
    var extract = Message.slice(i, i + 3)

    if (extract === 'and') {
        Message = Message.slice(0, i) + ' & ' + Message.slice(i + 3)
    }
}
document.write('After replacement : ',Message)


var Num = 472
var Num1 = '472'
document.write('Value : '+Num+'<br>Type : '+typeof(Num))
document.write('<br>Value : '+Num1+'<br>Type : '+typeof(Num1))

var Url = prompt('Write a UrL')
for (let i = 0; i < array.length; i++) {
    Url=Url.slice(i+3,Url.length)
    
}
    document.write(Url)

var UserInput = prompt('Write the imput')
document.write('User Input : '+UserInput)
document.write('<br>Upper Case : '+UserInput.toUpperCase())

var UserInput = prompt('Write the imput')
document.write('User Input : '+UserInput)
document.write('<br>Upper Case : '+UserInput.toLowerCase())



vacument.wrr UserInput = prompt('Write the imput')
doite('User Input : '+UserInput)
document.write('<br>Upper Case : '+UserInput[0].toLocaleUpperCase()+UserInput.substring(1))


var num = 35.36;
var numAsString = num.toString().replace('.', '');
document.write("Result: " + numAsString);

var a = '3'
var b = '3'
document.write("The result of adding a and b is: " +a+b );


var a = 3
var b = 3
document.write("The result of Subtract a and b is: " +(a-b) );
















