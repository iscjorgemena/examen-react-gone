import Image from "next/image";

const Card = (props) => {
    let { data } = props;

    //Labeles para la informacion de la tarjeta
    let labels = {
        birthday: 'Cumpleaños',
        gender: 'Género',
        eyes_color: 'Color de ojos',
        hair_color: 'Color de pelo',
        alive: 'VIVO',
        dead: 'FINADO',
        student: 'Estudiante',
        staff: 'Staff'

    }

    const generateStatus = (hogwartsStudent, alive) => {

        return <>{alive === true ? labels.alive : labels.dead} / {hogwartsStudent === true ? labels.student : labels.staff}</>
    }

    return (
        <div className="item-card">
            <div className={`image image-${data.house}`}>
                <Image src={data.image} width={165} height={0} alt={data.name} />
            </div>
            <div className='data'>
                <div className="flex-container-data-card">
                    <div className="status">{generateStatus(data.hogwartsStudent, data.alive)}</div>
                    <div><Image src='/images/icons/bookmark.png' width={20} height={22} /></div>
                </div>
                <div className="name">{data.name}</div>
                <div className="general"><b>{labels.birthday}</b>: <span>{data?.dateOfBirth || 'ND'}</span></div>
                <div className="general"><b>{labels.gender}</b>: <span>{data?.gender || 'ND'}</span></div>
                <div className="general"><b>{labels.eyes_color}</b>: <span>{data?.eyeColour || 'ND'}</span></div>
                <div className="general mb-10"><b>{labels.hair_color}</b>: <span>{data?.hairColour || 'ND'}</span></div>
            </div>
        </div>
    )
}

export default Card;