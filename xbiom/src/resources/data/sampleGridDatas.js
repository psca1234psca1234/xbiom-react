export const gridData = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com", country: "USA" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com", country: "Canada" },
    { id: 3, name: "Bob Johnson", age: 40, email: "bob@example.com", country: "UK" },
    { id: 4, name: "Alice Brown", age: 28, email: "alice@example.com", country: "Australia" },
    { id: 5, name: "Charlie Wilson", age: 35, email: "charlie@example.com", country: "Germany" },
    { id: 6, name: "Ella Davis", age: 22, email: "ella@example.com", country: "France" },
    { id: 7, name: "David Lee", age: 33, email: "david@example.com", country: "Spain" },
    { id: 8, name: "Olivia Martinez", age: 29, email: "olivia@example.com", country: "Italy" },
    { id: 9, name: "Liam Johnson", age: 27, email: "liam@example.com", country: "Japan" },
    { id: 10, name: "Mia Hernandez", age: 31, email: "mia@example.com", country: "Brazil" },
    { id: 11, name: "John Doe", age: 30, email: "john@example.com", country: "USA" },
    { id: 12, name: "Jane Smith", age: 25, email: "jane@example.com", country: "Canada" },
    { id: 13, name: "Bob Johnson", age: 40, email: "bob@example.com", country: "UK" },
    { id: 14, name: "Alice Brown", age: 28, email: "alice@example.com", country: "Australia" },
    { id: 15, name: "Charlie Wilson", age: 35, email: "charlie@example.com", country: "Germany" },
    { id: 16, name: "Ella Davis", age: 22, email: "ella@example.com", country: "France" },
    { id: 17, name: "David Lee", age: 33, email: "david@example.com", country: "Spain" },
    { id: 18, name: "Olivia Martinez", age: 29, email: "olivia@example.com", country: "Italy" },
    { id: 19, name: "Liam Johnson", age: 27, email: "liam@example.com", country: "Japan" },
    { id: 20, name: "Mia Hernandez", age: 31, email: "mia@example.com", country: "Brazil" }
    // Add more rows as needed
];

export const columns = [
    { id: "id", header: "ID",editor: "text", width: 300 },
    { id: "name",header: "Name",        template: function (obj) {
            return `<a href='javascript:void(0)' onclick='openLink(${obj.id})'>${obj.name}</a>`;
        },
        width: 450,
    },
    { id: "age", header: "Age", editor: "text",width: 500 },
    { id: "email", header: "Email Id", width: 450 },
  ];

//   css: { "color": "blue" },