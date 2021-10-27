let servers = [
    {id: 1, name: 'AWS', status: 'working'}, 
    {id: 2, name: 'GC', status: 'pending'}, 
]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}