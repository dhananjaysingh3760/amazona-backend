import bcrypt from 'bcrypt';

const data = {
    users : [
        {
            name:'Dhananjay',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        }
    ],
    products: [
        {
            
            name: 'nike pant',
            category: 'pant',
            image: '/images/p1.jpeg',
            price: 1200,
            brand: 'nike',
            rating: '4.5',
            numReviews: 10,
            countInStock: 9,
            description: 'high quality pant',
        },
        {
            name: 'adidas pant',
            category: 'pant',
            image: '/images/p2.jpeg',
            price: 1100,
            brand: 'adidas',
            rating: '4.4',
            numReviews: 9,
            countInStock: 15,
            description: 'high quality adidas pant'
        },
        {
            name: 'puma pant',
            category: 'pant',
            image: '/images/p3.jpeg',
            price: 1000,
            brand: 'puma',
            rating: '4.2',
            numReviews: 11,
            countInStock: 0,
            description: 'high quality puma pant'
        },
        {
            name: 'nike shirt',
            category: 'shirt',
            image: '/images/p4.jpeg',
            price: 800,
            brand: 'nike',
            rating: '4.9',
            numReviews: 20,
            countInStock: 12,
            description: 'high quality nike shirt'
        },
        {
            name: 'adidas shirt',
            category: 'shirt',
            image: '/images/p5.jpeg',
            price: 700,
            brand: 'adidas',
            rating: '4.6',
            numReviews: 10,
            countInStock: 20,
            description: 'high quality adidas shirt'
        },
        {
            name: 'puma shirt',
            category: 'shirt',
            image: '/images/p6.jpeg',
            price: 600,
            brand: 'puma',
            rating: '4.5',
            numReviews: 16,
            countInStock: 30,
            description: 'high quality puma shirt'
        }
    ]
}

export default data;