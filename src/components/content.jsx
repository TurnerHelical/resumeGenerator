import '../styles/content.css'
import GenInfo from './genInfo'
import Edu from './edu'
import WorkHistory from './workHistory'


function Content() {

    return <>
            <main>
                <section id='genInfo'>
                    <GenInfo />
                </section>
                
                <section id='edu'>
                    <Edu />
                </section>
                
                <section id='workHistory'>
                    <WorkHistory />
                </section>
                
            </main>


        </>
}

export default Content
