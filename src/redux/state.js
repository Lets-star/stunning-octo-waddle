let state = {
    profilePage: {
        posts: [{id: 1, post: 'Hi', likescount: 15},
            {id: 2, post: 'Bienvenido en mi cait', likescount: 60}
        ],
    },
    messagesPage: {
        dialogs: [{
            id: 1,
            name: 'Diana'
        }, {
            id: 2,
            name: 'Ivan'
        }, {
            id: 3,
            name: 'Nastya'
        }, {
            id: 4,
            name: 'Semen'
        }, {
            id: 5,
            name: 'Vasya'
        }, {
            id: 6,
            name: 'Alina'
        }],
        messages: [{
            id: 1,
            message: 'Hi'
        }, {
            id: 2,
            message: 'Yo'
        }, {
            id: 3,
            message: 'How are u'
        }, {
            id: 4,
            message: 'Thx'
        }]
    },
    sidebarPage: {
        sidebar:
               [{id: 1, friend: 'Anatoly'},
                {id: 2, friend: 'Maxim'},
                {id: 3, friend: 'Nastya'}]
    }
}
export default state