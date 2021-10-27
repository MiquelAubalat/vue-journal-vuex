

export default () =>  ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'molestias corporis harum officiis officia distinctio ea possimus, reiciendis similique dolore at minus architecto atque dicta!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias corporis harum officiis officia distinctio',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: ' amet consectetur adipisicing elit. Accusantium molestias corporis harum officiis officia distinctio',
            picture: null
        }

    ]
     
})