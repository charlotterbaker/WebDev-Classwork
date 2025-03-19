const toysData = [
    { name: "Stuffed Giraffe", price: "$10", ageRange: "1-2 years", rating: "4.7", image: "toy1.jpg" },
    { name: "Stuffed Elephant", price: "$15", ageRange: "1-2 years", rating: "4.0", image: "toy2.jpg" },
    { name: "Barbie Doll", price: "$11", ageRange: "7-10 years", rating: "4.9", image: "toy3.jpg" },
    { name: "Stacking Toy", price: "$16", ageRange: "1-3 years", rating: "3.9", image: "toy4.jpg" },
    { name: "Coloring Markers", price: "$9", ageRange: "8-11 years", rating: "4.5", image: "toy5.jpg" },
    { name: "Scooter", price: "$30", ageRange: "10-12 years", rating: "4.3", image: "toy6.jpg" },
    { name: "Soccer Ball", price: "$10", ageRange: "8-12 years", rating: "4.7", image: "toy7.jpg" },
    { name: "Toy Blocks", price: "$12", ageRange: "3-6 years", rating: "3.8", image: "toy8.jpg" },
    { name: "Stuffed Fish", price: "$18", ageRange: "1-2 years", rating: "4.8", image: "toy9.jpg" },
];

const toysContainer = document.getElementById("toys");

toysData.forEach((toy, index) => {
    const toyElement = document.createElement("div");
    toyElement.classList.add("toy");
    toyElement.innerHTML = `
        <img src="${toy.image}" alt="${toy.name}">
        <div class="toy-info">
            <h3>${toy.name}</h3>
            <p>Price: ${toy.price}</p>
            <p>Age Range: ${toy.ageRange}</p>
            <p>Rating: ${toy.rating}</p>
        </div>
    `;
    toysContainer.appendChild(toyElement);
});
