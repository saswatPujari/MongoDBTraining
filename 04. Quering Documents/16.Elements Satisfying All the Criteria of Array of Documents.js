db.users.find( { points: { $elemMatch: { points: { $lte: 70 }, bonus: 20 } } } )