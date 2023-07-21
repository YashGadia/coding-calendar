import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {

  const [contest, setContest] = useState([]);

  useEffect(() => {
    axios.get("https://kontests.net/api/v1/all").then((result) => {
      setContest(result.data);
    })
  }, []);

  // console.log(contest);

  let filterData = [];
  contest.map(cont => {
    let contestStartDate = cont.start_time?.toString();
    let contestEndDate = cont.end_time?.toString();
    return(
      <>
      {(contestEndDate?.slice(0, 4) === contestStartDate?.slice(0, 4)) && (contestEndDate?.slice(5, 7) === contestStartDate?.slice(5, 7)) && (contestEndDate?.slice(8, 10) === contestStartDate?.slice(8, 10)) ? 
        (filterData.push({
          "name": cont.name,
          "url": cont.url,
          "start_time": cont.start_time,
          "site": cont.site,
          "duration": cont.duration,
        })
        ) : (console.log(cont.name))
    }
    </>
    )
  })

  const secToHr = (sec) => {
    return sec/3600;
  }

  return (
    <div className="row my-3">
      {filterData.map(latestContest => {
        let dur = latestContest.duration;
        let durationInHr = secToHr(dur).toFixed(1);
        return(
          <div className='col-md-4 my-3'>
            <div className="card" key={latestContest.url}>
              <div className="card-body myCard">
                <h5 className="card-title" style={{color: "#02755e",}}>{latestContest.name}</h5>
                <hr />
                <p className="card-text ht">
                  <b>Start Date: </b>{latestContest.start_time.slice(8, 10)}-{latestContest.start_time.slice(5, 7)}-{latestContest.start_time.slice(0, 4)}.&nbsp; <b>Duration: </b>{durationInHr} hrs
                  <br />
                  <b>Platform: </b> {latestContest.site}
                </p>
                <a href={latestContest.url} className="btn btn-primary">Go to Contest Page</a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
