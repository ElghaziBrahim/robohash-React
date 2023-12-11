const Card = ({ data }) => {
    return (
        <>
            <div className="card">
                <img src={data.avatar} />
                <p className="firstName">{data.firstName}</p>
                <p className="lastName">{data.lastName}</p>
                <p className="email">{data.email}</p>
            </div>
        </>
    )
}

export default Card