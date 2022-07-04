import React from 'react';

function Faq() {
  const faqData = [
    {
      title: 'What is Spirits Of Africa?',
      body: "Spirits Of Africa is a project focused on building a community of African Youths. We want a community that is open to every African, considering specially those who don't know what NFTs are or what they are about. We want to build a community with key focus on retention and teaching the true African history, developing a new African youth by leveraging on the blockchain technology. Aiding them find their true self and what their gifting are while helping them build on it. Spirits Of Africa is for us all.",
    },
    {
      title: 'Why should I support this project? What is unique about it?',
      body: 'SOA is a project that is here to be more of a solution, it is here to help make things easier for us, it requires that we believe in ourselves once again and acknowledge that working together in this new future will be easier. With this project we hope to build a community that makes it easier to onboard people first into the NFT space and by extension the Metaverse. SOA community is aimed to be a self supporting ecosystem for Africans with unique skills/talent and also those who seek to learn these skills. This project is unique as it is the collective of the African spirits, regardless of country, tribe or creed, as long as we are Africans. A major goal of the project is developing the African youth and helping them attain full potential, hereby giving them the chance to live a much better and easier life.',
    },
    {
      title: 'Who are behind Spirits Of Africa?',
      body: 'A group of five young Africans with a zeal to rewrite the narrative and build Africa from Africa. We’re introverts, but we’ve chosen to break out of our shells and soar to the highest peak to preach the gospel of Human Resource Development. Three of the five are creative graphic artists and the other two are talented young men who fell in love with the SOA project idea and are willing to give 200% to its success. We’ve made significant progress so far and we will continue to forge ahead.',
    },
    {
      title: 'What is the first collection going to be about and how was it created?',
      body: 'The first Spirits of Africa Collection is The Sango - God Mode collection is made up of major characters featuring in the upcoming Sango Comic Series and they have a role to play in the Comic Universe we are building. The Sango – God Mode is a prologue that gives insight into what to look forward to from the Comic universe.',
    },
    {
      title: "What's the plan for the Launch?",
      body: "Definitely a launch party! That's all we can say for now until we draw closer to the launch date.",
    },
    {
      title: 'What is the Roadmap like?',
      body: `So basically first of is putting ourselves out there for everyone to come support genuinely, work together towards a successful launch as it will kick off everything we have planned. So from "Our humble beginning" we will get to "Walk with the Spirits", follow "As the Spirits leads" us, we will meet a Spirit that will introduce itself as "A god", we will also discover "A new Spirit" by the way and at this stage I think we should be "Dining with the Spirits" cause we've seen too many now. And as we dine with them, we become "One with the Spirits" and as we are one with the Spirits, "The Spirits will abide with us" and the we journey down "Into the Spirit Land" where we will call our home and grow. You can read more about the roadmap at #🛣│roadmap`,
    },
    {
      title: 'What about utility?',
      body: `Our first target is to create awareness about the SOA project and work towards a successful launch as it will kick off our roadmap plan. 
      The Spirit of Africa project is a nine-part journey, and we’ve included a breakdown of each part below`,
    },
  ];

  const FaqCards = (): any => {
    const toglePanel = (index: number) => {
      const id = 'faq' + index;
      const hrId = 'hr' + index;
      const el = document.getElementById(id)!;
      const hrEl = document.getElementById(hrId)!;

      if (el.classList.contains('hide')) {
        el.classList.remove('hide');
        hrEl.classList.remove('hide');
      } else {
        el.classList.add('hide');
        hrEl.classList.add('hide');
      }
    };

    return faqData.map((item, index) => (
      <div className="faq-card" key={index}>
        <div className="card-header">
          <h4
            onClick={(e) => {
              const el: any = e.target;
              if (el.nextSibling.innerText === '+') {
                el.nextSibling.innerText = '-';
              } else {
                el.nextSibling.innerText = '+';
              }
              toglePanel(index);
            }}
          >
            {item.title}
          </h4>
          <button
            className="add-btn"
            onClick={(e) => {
              const el: any = e.target;
              if (el.innerText === '+') {
                el.innerText = '-';
              } else {
                el.innerText = '+';
              }
              toglePanel(index);
            }}
          >
            +
          </button>
        </div>

        <hr className="hide" id={'hr' + index} />
        <div className="card-body hide" id={'faq' + index}>
          <p>{item.body}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="faq container">
      <div className="faq-cards">
        <h2 className="faq-header">
          <b>FAQs</b>
        </h2>
        <div>
          <FaqCards />
        </div>
      </div>
    </div>
  );
}

export default Faq;
