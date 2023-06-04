import React from "react";
import Quote from "../components/Quote";
import { Link } from "react-router-dom";
import "../styles/About.css";
import Girl from "../assets/Girl.jpg";

function About() {
  return (
    <div>
      <div className='about__container'>
        <div className='about__potrait-image'>
          <img src={Girl} alt='portrait' />
        </div>
        <div className='about__content'>
          <div className='about__text-title'>
            Hi! I’m a Licensed Clinical Mental Health Counselor.
          </div>
          <div className='about__text-text'>
            Hello, and welcome. I'm glad you're here. It sounds like you're
            interested in exploring what's happening inside yourself and how you
            can experience a more fulfilling existence. I'm here to support you
            on that journey. As a therapist, I believe that everyone has the
            capacity to grow and change. It's amazing to see my clients make
            progress every day, and I'm honored to be a part of that process.
          </div>
        </div>
        <div className='about__bottom-content'>
          <div className='about__bottom-title'>
            What it’s like to work with me.
          </div>
          <div className='about__bottom-text'>
            Therapy can sometimes feel like having a good conversation with a
            close and trusted friend who wants to hear all about the problem you
            are facing. However, it ideally touches something more profound. For
            change to truly happen, it must. We will focus on what you feel
            right now to give us clues to understand you better, how you cope,
            and what you need to heal and grow.Together, we can explore your
            thoughts, feelings, and behaviors in a safe and nonjudgmental space.
            We can work to identify patterns that may be holding you back and
            develop strategies to help you move forward.
          </div>
        </div>
        <div className='about__side-image'></div>
      </div>
      <div className='about__content2'>
        <div className='about__content2-title'>My Approach</div>
        <div className='about__content2-text'>
          Like many modern therapists, I use a combination of approaches to suit
          my client’s unique needs. My background is in psychodynamic
          psychotherapy, and a treatment called Accelerated Experiential Dynamic
          Psychotherapy (AEDP). You might not be familiar with this treatment,
          so let me tell you about it. While many therapeutic approaches have
          roots in looking at what is not working or “wrong,” AEDP pulls for
          your strengths and your natural ability to heal. It focuses us
          in-the-moment during each session. We will look for cues from your
          body to help you express an emotion that may have been stuck for a
          while.
        </div>
      </div>
      <div className='about__content3'>
        <div className='about__content3-title'>My training background.</div>
        <div className='about__content3-text'>
          Here are a few things about my professional background you might like
          to know:
          <ul>
            <li>
              Completed post-graduate training in Psychodynamic Psychotherapy
              from the Northfield School of Psychology
            </li>
            <li>
              Completed courses in the Eating Disorders Institute at the
              Belleview University
            </li>
            <li>
              Completed an Intensive Short-term Dynamic Psychotherapy (ISTDP)
              course at the Pineville College of Psychology
            </li>
            <li>
              Completed Level III clinician training at the Transcendental
              Institute of Psychotherapy
            </li>
            <li>Graduate training at a university counseling center</li>
            <li>
              Over 15 years of experience as an outpatient clinician in private
              practice
            </li>
            <li>
              Completed a certification course in Cognitive Behavioral Therapy
              (CBT) from the Holistics Institute of Psychology
            </li>
            <li>
              Completed an Advanced course in Mindfulness-Based Stress Reduction
              (MBSR) from the Pacific Institute of Psychology
            </li>
          </ul>
        </div>
      </div>
      <Quote />
      <div className='about__content4'>
        <div className='about__content4-container'>
          <div className='about__content4-text'>
            When you’re ready to get started, I’m here to help.
          </div>
          <div className='about__link'>
            <Link to='/contact'>
              <button className='about__button'>Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
