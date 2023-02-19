import swit from '../assets/swit.png';
import forza from '../assets/forza horizon-1.jpg'
import gta from '../assets/gta.png'

const Cardlist = ()=> {
    return(
        //Inline Css
        <div >
            <div className="card">
                <img className='aturswit' src={swit} />
                <div className='namagame'>Rock paper</div>
                <div className='deskripsi'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
                    <button className='buttonplay'>Play Now</button>
            </div>

            <div className="card">
                <img className='aturswit' src={forza} />
                <div className='namagame'>Forza Horizzon</div>
                <div className='deskripsi'>Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series.
                The game is set in a fictionalised representation of Mexico.</div>
                    <button className='buttonplay'>Play Now</button>
            </div>

            <div className="card">
                <img className='aturswit' src={gta} />
                <div className='namagame'>Gta 5</div>
                <div className='deskripsi'>Grand Theft Auto V adalah permainan aksi-petualangan 2013 yang
                dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games</div>
                    <button className='buttonplay'>Play Now</button>
            </div>
        </div>
    )
}

export default Cardlist;
