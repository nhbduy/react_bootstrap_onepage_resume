import React from 'react';

import data from './data';

import ImageSlider from '../../plugin/ImageSlider/index';

import './style.css';

const cn = require('classnames');

const Experiences = () => {
  return (
    <section
      className='resume-section p-3 p-lg-5 d-flex flex-column'
      id='experiences'>
      <div className='my-auto'>
        <h2 className='mb-5'>Experiences</h2>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={cn(index !== data.length - 1 ? ' mb-5' : '')}>
            <div className='resume-item d-flex flex-column flex-md-row'>
              <div className='resume-content mr-auto'>
                <h3 className='mb-0'>{item.title}</h3>
                <div className='subheading mb-3'>{item.company}</div>
              </div>
              <div className='resume-date text-md-right'>
                <span className='text-primary'>{item.timeline}</span>
              </div>
            </div>
            {item.projects.map(p => (
              <div key={p.name}>
                <hr className='experiences' />
                <div className='resume-item d-flex flex-column flex-md-row'>
                  <div>
                    <h4>{p.name}</h4>
                    <p>
                      <i>{p.description}</i>
                    </p>
                    <code>
                      <i>{p.technology}</i>
                    </code>
                    <ul className='pt-3 pl-3 pr-3'>
                      {p.responsibilities.map(r => (
                        <li key={r}>
                          <p>{r}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {p.images && p.images.length && <ImageSlider list={p.images} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
