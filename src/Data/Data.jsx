import React from "react"
import clasess from './Data.module.scss'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Trash from '../CustomComponents/Trash'
import StatusItem from './StatusItem'
const Data = (props) => {

    const dataHandler = (id) => {
        props.idData(id)
    }
    const colorHandler = (colorObject) => {
        props.colorData(colorObject)
    }


    return (
        <main>
            {props.jobs.map(oneJob => (
                <Stack direction="row" spacing={1} sx={{
                    maxWidth: 'md',
                    height: 'fit-content'
                }} alignItems={"center"} justifyContent={'space-around'}
                    className={clasess['component']}
                    key={oneJob.id}
                    divider={<Divider orientation="vertical" flexItem />}>

                    <StatusItem dataSI={oneJob} colorUp={colorHandler} />
                    <p className={clasess['companyName']}>
                        {oneJob.companySite}
                    </p>

                    <div className={clasess[`${oneJob.skills.length === 1 ? "containerFlex" : 'containerGrid'}`]}>
                        {oneJob.skills.map((oneSkill, id) => (
                            <p className={clasess['skillsStyle']} key={id} >{oneSkill.toUpperCase()}</p>
                        )
                        )}
                    </div>
                    <a className={clasess['link']} href={oneJob.link} target="_blank" rel="noreferrer">link</a>
                    {oneJob.customDescription.trim().length > 0 && <p className={clasess['siteName']}>{oneJob.customDescription}</p>}
                    <Trash data={oneJob} removeItem={dataHandler} />
                </Stack>
            ))}
        </main>
    )
}

export default Data 