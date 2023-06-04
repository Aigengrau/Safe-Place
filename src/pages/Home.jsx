import React from "react";
import Quote from "../components/Quote";
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className='home__container'>
      <div className='home__title'>FIND YOUR VOICE</div>
      <div className='home__postitle'>
        It’s your life to live. Let’s work together to find out who
        <span> you</span> are.
      </div>
      <div className='home__content1'>
        <div className='content__title'>
          If you feel stuck, there’s <span>hope.</span>
        </div>
        <div className='content__text'>
          Maybe you’ve been through a break-up, and you feel raw or lost without
          your former partner. Or perhaps you’re in a relationship that feels
          “off,” and you’re not sure why. You’re still devoted, but there’s an
          underlying problem you can’t quite pinpoint.
        </div>
        <div className='content__picture'></div>
      </div>
      <div className='home__content2'>
        <div className='content1'>
          <div className='content__title1'>
            <span>Build</span> your confidence.
          </div>
          <div className='content__text1'>
            Accommodate, people-please, avoid conflict at all costs,don't have courage to say 'NO'. Sound
            familiar? If you often second-guess yourself, therapy can help you
            feel more comfortable expressing your thoughts and feelings.
          </div>
        </div>
        <div className='content1'>
          <div className='content__title1'>
            <span>Create</span> a plan to move forward.
          </div>
          <div className='content__text1'>
            It can feel daunting to have to make big decisions right after
            college. Maybe you feel pressure to do things the way your family or
            friends want you to. Perhaps you are directionless in your job. You
            know you want something different but don’t know how to make a
            change.
          </div>
        </div>
        <div className='content1'>
          <div className='content__title1'>
            <span>Appreciate</span> yourself.
          </div>
          <div className='content__text1'>
            Body image dissatisfaction, taking emotional pain out on your body,
            eating disordered behaviors. There are so many ways we can feel at
            odds with our bodies. You can find self-compassion, healing, and
            contentment even after years of believing your body was not good
            enough.
          </div>
        </div>
      </div>
      <div className='home__content3'>
        <div className='content3__title'>Do you need therapy?</div>
        <div className='content3__text'>
          <div className='content3__text1'>
            You might be thinking "My problems aren't real problems. Other
            people have it so much worse." We can all benefit from an outside
            perspective and connection with another human being. Additionally,
            my training allows us to process what you are feeling in a different
            way than perhaps you can with a friend or family member. No matter
            your specific concerns, you shouldn't have to sit with them alone.
          </div>
          <div className='content3__text2'>
            There is healing in the connections we form with others, and that
            includes a therapeutic relationship. The research into human
            neuroscience tells us that we are wired to attach to others.
            Connections are vital to our survival, especially these days when we
            are as isolated as ever due to the COVID-19 pandemic. If you're
            unsure if it's right for you, I'm happy to answer any questions you
            might have about me or the process. Just ask!
          </div>
        </div>
      </div>
      <Quote />
      <div className='home__girl'>
        <div className='text__container'>
          <div className='link__text'>
            <Link to='/about'>LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
