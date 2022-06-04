import React, { useContext } from "react";
import clasess from "./Data.module.scss";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Trash from "../CustomComponents/Trash";
import StatusItem from "./StatusItem";
import Context from "../Context/DataContext";
import Counter from "../Counter/Counter";
import PaginationContext from "../Context/PaginationContext";

const Data = () => {
  const contextStorage = useContext(Context);
   const ctxPagination = useContext(PaginationContext)

   console.log(ctxPagination.currentPosts)

  return (
    <main>
      <Counter/>
      {ctxPagination.currentPosts.map((oneJob) => (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: "md",
            height: "fit-content",
          }}
          alignItems={"center"}
          justifyContent={"space-around"}
          className={clasess["component"]}
          key={oneJob.id}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <StatusItem dataSI={oneJob} />
          <p className={clasess["companyName"]}>{oneJob.companySite}</p>

          <div
            className={
              clasess[
                `${
                  oneJob.skills.length === 1 ? "containerFlex" : "containerGrid"
                }`
              ]
            }
          >
            {oneJob.skills.sort((a, b) => a.length - b.length).map((oneSkill, id) => (
              <p className={clasess["skillsStyle"]} key={id}>
                {oneSkill.toUpperCase()}
              </p>
            ))}
          </div>
          <a
            className={clasess["link"]}
            href={oneJob.link}
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          {oneJob.customDescription.trim().length > 0 && (
            <p className={clasess["comment"]}>{oneJob.customDescription}</p>
          )}
          <Trash
            onClick={() => {
              contextStorage.setLocalData(
                contextStorage.localdata.filter(
                  (object) => object.id !== oneJob.id
                )
              );
            }}
          />
        </Stack>
      ))}
    </main>
  );
};

export default React.memo(Data);
