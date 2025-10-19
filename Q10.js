const user = { 
id: 101, 
name: "Alice", 
contact: { 
email: "alice@example.com", 
phone: { 
home: "1234-456-7890", 
work: "07123456789" 
} 
}, 
hobbies: ["reading", "cycling", "coding"] 
}; 

console.log(user.contact.phone.work)