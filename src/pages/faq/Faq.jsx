import { Link } from "react-router-dom";
import { useRef } from "react";
import Collapsible from "react-collapsible";

//Icons
import generalIcon from "../../imgs/icons/helpCenter/general.png";
import accountIcon from "../../imgs/icons/helpCenter/account.png";
import duckIcon from "../../imgs/icons/helpCenter/rubberDuck.png";
import lightIcon from "../../imgs/icons/helpCenter/lightBulb.png";
import Journal from "../../imgs/icons/journal.png";
import Heart from "../../imgs/icons/heartclipboard.png";
import Schedule from "../../imgs/icons/schedule.png";
import People from "../../imgs/icons/3people.png";
import HighFrequency from "../../imgs/icons/highfrequency.png";

export const Faq = () => {
  const generalRef = useRef(null);
  const accountRef = useRef(null);
  const childrenProfileRef = useRef(null);
  const subscriptionRef = useRef(null);
  const wizardRef = useRef(null);
  const medicineRef = useRef(null);
  const familyRef = useRef(null);
  const trackingHubRef = useRef(null);
  const journalRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="faq-page">
      <p>
        Search our extensive library for general information, as well as
        in-depth explanations and how-tos.
        <br />
        <br />
        If you have more questions, tap the “Contact Us” button to chat with us.
      </p>

      <div className="faq-wrapper">
        <div className="faq-examples">
          <div className="examples" onClick={() => scrollToSection(generalRef)}>
            <img src={generalIcon} height={55} alt="" />
            <div>
              <h3>General :</h3>
              <p>Information about our services and policies</p>
            </div>
          </div>

          <div className="examples" onClick={() => scrollToSection(accountRef)}>
            <img src={accountIcon} height={55} alt="" />
            <div>
              <h3>Account :</h3>
              <p>Managing your account and data.</p>
            </div>
          </div>

          <div
            className="examples"
            onClick={() => scrollToSection(childrenProfileRef)}
          >
            <img src={duckIcon} height={55} alt="" />
            <div>
              <h3>Children's Profiles :</h3>
              <p>Adding, managing and deleting your children's profiles.</p>
            </div>
          </div>

          <div
            className="examples"
            onClick={() => scrollToSection(subscriptionRef)}
          >
            <img src={lightIcon} height={65} alt="" />
            <div>
              <h3>Subscriptions and Free Services :</h3>
              <p>
                What can you do on the app for free, and additional paid
                services.
              </p>
            </div>
          </div>

          <div className="examples" onClick={() => scrollToSection(wizardRef)}>
            <img src={HighFrequency} height={55} alt="" />
            <div>
              <h3>As-needed Wizard :</h3>
              <p>
                In-depth information about our as-needed medication management
                feature.
              </p>
            </div>
          </div>

          <div
            className="examples"
            onClick={() => scrollToSection(medicineRef)}
          >
            <img src={Schedule} height={55} alt="" />
            <div>
              <h3>Medicine and Other Treatments on a Schedule :</h3>
              <p>
                In-depth information about our scheduled medication management
                feature.
              </p>
            </div>
          </div>

          <div className="examples" onClick={() => scrollToSection(familyRef)}>
            <img src={People} height={55} alt="" />
            <div>
              <h3>Care Family :</h3>
              <p>
                In-depth information about our caregivers management system.
              </p>
            </div>
          </div>

          <div
            className="examples"
            onClick={() => scrollToSection(trackingHubRef)}
          >
            <img src={Heart} height={55} alt="" />
            <div>
              <h3>Tracking Hub :</h3>
              <p>
                Additional information about tracking categories and options.
              </p>
            </div>
          </div>

          <div className="examples" onClick={() => scrollToSection(journalRef)}>
            <img src={Journal} height={55} alt="" />
            <div>
              <h3>Journal :</h3>
              <p>
                Additional information about tracking your child's reaction and
                progress related to their treatment plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-collapse">
        <h2 ref={generalRef}>General</h2>
        <Collapsible trigger={<div>What is the Encurage app about?</div>}>
          <div>
            <p>
              We developed Encurage to help parents (and other caregivers) care
              for their children safely, and efficiently.
              <br />
              Managing your child's health is a dynamic and challenging journey,
              with many unique aspects. We put extensive research and work into
              addressing your specific and ever evolving needs.
              <br />
              <br />
              Encurage currently includes:
              <br />
            </p>
            <ul>
              <li>As-needed medicine management </li>
              <li>Medicine-on-a-schedule management </li>
              <li>
                A comprehensive tracking system for symptoms, side effects,
                vitals, therapies, medicine w/o a schedule, and growth
              </li>
              <li>
                Daily Life - a baby tracker, including feeding, pumping, sleep,
                diapers, introducing solids, and potty training.
              </li>
              <li>
                Journal for tracking and monitoring your child's reaction to,
                and progress with, their treatment plan
              </li>
              <li>Multiple caregivers sync and co-management system </li>
            </ul>
          </div>
        </Collapsible>
        <Collapsible
          trigger={<div>Does Encurage provide medical advice or services?</div>}
        >
          <p>
            No. We are strictly a management tool for the life in between
            doctors’ visits, and do not have any connection to, nor do we offer,
            any medical advice or services of any kind. Please read our Terms
            and Conditions for more details.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>How do you handle the data collected by the app?</div>}
        >
          <p>
            We take you and your child’s privacy very seriously, and treat it
            with the utmost respect. Please visit our
            <Link to="/HelpCenterLayout/Privacy">Privacy Policy</Link> page to
            read the full details about the handling of you and your child's
            data.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>How do I contact your technical support?</div>}
        >
          <p>
            Tap the “Contact Support” option on your settings menu, and send us
            a message whenever you have any questions, or if you are
            experiencing any issues. We are committed to providing quick
            responses and helping you as fast as we can.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I have a feature request for future releases; or I want to provide
              some feedback. Who should I contact?
            </div>
          }
        >
          <p>
            Please share all your thoughts, feedbacks and requests with us
            through the Contact Support option on your settings menu. Direct
            feedback from our users means the world to us! It enables us to keep
            enhancing the app in alignment with parents’ needs. We read and
            address all feedback and feature requests.
          </p>
        </Collapsible>
        <h2 ref={accountRef}>Account</h2>
        <Collapsible
          trigger={
            <div>
              Why do you ask for my date of birth during account creation?
            </div>
          }
        >
          <p>
            The sole reason we ask for your date of birth is to help us in
            verifying that we are allowed to collect information from you, in
            accordance with privacy laws.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>How can I log in following account creation?</div>}
        >
          <p>
            If you use the app frequently, and don’t force close it or log out
            when you’re done, you will probably not need to log in upon
            reopening it. In all other cases, you can either: use your email and
            password; or log in through Google or Apple, by tapping the
            corresponding buttons available on the sign in screen.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How can I edit my profile?</div>}>
          <p>
            Tap your profile photo to access “My Profile”, and there you can
            edit any values on your profile. Tap “Save” when you’re done to
            apply edits made. You can also access your profile from the Settings
            menu.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>Can I delete my account?</div>}>
          <p>
            Yes, you can delete your account through the “Delete Account” option
            on the settings menu of the app.You can also contact us through the
            “Contact Support” button to delete your account. Please note, that
            once your account is deleted, it cannot be restored.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>Can I delete my data?</div>}>
          <p>
            If you are interested in deleting all of your data from our servers,
            please contact us through the Contact Support option on the settings
            menu. We will process your request within a reasonable time. Some
            auto-collected, technical and non-identifiable data may remain on
            our servers. Please read our Privacy Policy for complete details.
            Please note, that once your data is deleted, it cannot be restored.
          </p>
        </Collapsible>
        <h2 ref={childrenProfileRef}>Children's Profiles</h2>
        <Collapsible
          trigger={<div>How many children’s profiles can I add?</div>}
        >
          <p>You can add as many children as you like to your account.</p>
        </Collapsible>

        <Collapsible
          trigger={<div>What’s the relevance of my child’s weight?</div>}
        >
          <p>
            While adding your child’s weight is optional, we recommend adding
            and updating it periodically, because many dosages are based on your
            child’s current weight. Having it available on the app is one less
            thing to remember!
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I edit my child’s profile?</div>}>
          <p>
            You can edit your child’s profile by tapping the arrow available
            next to your child's name.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I remove a child’s profile?</div>}>
          <p>
            You can delete the profile through the edit button (pencil icon)
            available next to your child’s photo space. Please note, that a
            deleted profile cannot be restored.
          </p>
        </Collapsible>
        <h2 ref={subscriptionRef}>Subscriptions and Free Services</h2>
        <Collapsible trigger={<div>What can I do on the app for free?</div>}>
          <p>You can use the app for free for the following services:</p>
          <ul>
            <li>
              Manage acetaminophen and ibuprofen episodes. No limit on the
              number of episodes.
            </li>
            <li>Manage up to 2 medicine or other treatments on a schedule.</li>
            <li>Track symptoms. No limit on the number of symptoms.</li>
          </ul>
        </Collapsible>
        <Collapsible
          trigger={
            <div>What additional services do I get for the subscription?</div>
          }
        >
          <p>In addition to the free services, you can:</p>
          <ul>
            <li>
              Manage additional as-needed medicine with the As-needed Wizard.
            </li>

            <li>
              Manage an unlimited number of medicine and other treatments on a
              schedule.
            </li>

            <li>
              Add Care Family Members of your choice and sync management across
              devices.
            </li>

            <li>
              Track: side effects; vitals; growth; therapies; and medicine
              without a schedule.
            </li>

            <li>
              Use our baby tracker - Daily Life: feeding, pumping, sleep,
              diapers, potty training and introducing solids.
            </li>

            <li>
              Journal your child’s reaction to, and progress with their
              treatment plan{" "}
            </li>
          </ul>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              If I added a Care Family member, do they need to pay for a
              subscription as well?
            </div>
          }
        >
          <p>
            One subscription payment covers the entire care family. All added
            care family members will have the same access to Encurage Premium.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I cancel my subscription?</div>}>
          <p>
            You can cancel your subscription at any time, without contacting us,
            through your Apple ID (for iOS users), or your Google Play account
            (for android users). Please note that we are unable to cancel your
            subscription for you, and the only way to do so is through your
            device. For additional details, please read our Terms and
            Conditions.
          </p>
        </Collapsible>
        <h2 ref={wizardRef}>As-needed Medicine (As-needed Wizard)</h2>
        <Collapsible
          trigger={
            <div>
              What is the purpose of the As-needed Wizard? Why is it a separate
              feature?
            </div>
          }
        >
          <p>
            As-needed medications are given frequently to babies and children,
            and their safe management is a significant challenge.
            <br />
            We developed this feature to address the specific and unique aspects
            of as-needed medicine management, such as: calculating the right
            time gaps and timing of future doses; switching between
            acetaminophen and ibuprofen; alternating them if recommended; the
            dynamic nature of a fever/sickness episode that sometimes results in
            pausing and resuming medication; and many others.
            <br />
            When you want to manage any as-needed (also called PRN) medication
            for your child, please use the As-needed Wizard. For all other
            medications and treatments, please use the Everything On a Schedule
            feature.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I want to give my child acetaminophen. Why am I asked about my
              child’s ibuprofen dose as well?
              <br />
              <br />
              OR
              <br />
              <br />I want to give my child ibuprofen. Why am I asked about my
              child’s acetaminophen dose as well?
            </div>
          }
        >
          <p>
            The setup process for acetaminophen and ibuprofen episodes is a
            one-time, short process, done at the beginning of the first Episode
            you manage with Encurage. We want you to have the flexibility during
            Episodes to switch from acetaminophen to ibuprofen, or the other way
            around; to switch to alternating both; or from alternating both to
            giving one of them.
            <br />
            The doses’ information you provided at setup is stored for future
            uses, and can be easily edited at any time.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I want to switch from acetaminophen to ibuprofen.
              <br />
              <br />
              OR
              <br />
              <br />I want to switch from ibuprofen to acetaminophen.
              <br />
              <br />
              How do I do it?
            </div>
          }
        >
          <p>
            You can make the switch from the edit button available on the top
            right corner of the schedule. The schedule will auto update to
            reflect your choice.
            <br />
            This change can be done as many times as you need during the
            episode.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I’m alternating acetaminophen and ibuprofen and want to switch to
              giving only one of them.
              <br />
              <br />
              OR
              <br />
              <br />
              I’m giving either acetaminophen or ibuprofen, and want to switch
              to alternating.
              <br />
              <br />
              How do I do it?
            </div>
          }
        >
          <p>
            You can make the switch from the edit button available on the top
            right corner of the schedule. The schedule will auto update to
            reflect your choice. This change can be done as many times as you
            need during the episode.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I need to update my child’s dosage of an as-needed medication. How
              do I do that?
            </div>
          }
        >
          <p>
            All dosages can be edited through the edit button (pencil icon) on
            your child’s profile. Tap “Save” when you're done to apply the edits
            made. Edited dosages will apply automatically to medicine schedules.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I’m giving an as-needed medicine that is not on the list of
              as-needed medications on the app. How do I add it?
            </div>
          }
        >
          <p>
            You can type the medicine name to add it manually, and then continue
            to set the schedule.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              Will I get multiple reminders for each dose? What if I want to
              delay a dose?
            </div>
          }
        >
          <p>
            You will get a total of 4 reminders for each dose. To delay a dose,
            tap the “Snooze” button and choose the right option for you.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>Why is the Episode paused after 4 reminders?</div>}
        >
          <p>
            Reminders for each dose are sent during the first hour after the
            dose becomes available. If you don’t respond to these 4 reminders,
            there’s probably a good reason for it (your child is napping, or
            happily playing, or simply doing better for the time being), so we
            stop sending them and keep the schedule paused until it’s the right
            time for you to resume it. When you’re ready to resume, the schedule
            will auto update for future doses.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>Can I pause the schedule?</div>}>
          <p>
            Yes, you can do that through the edit button available on the top
            right corner of the schedule. Reminders will be paused until you’re
            ready to resume, and the schedule will auto update for future doses.
            <br />
            If you’re managing an episode of two as-needed medications, that are
            not acetaminophen or ibuprofen, you also have the option of pausing
            one of them, and resuming when you’re ready.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I accidentally tapped “Dose Given”, can I edit the administration
              time of a single dose?
            </div>
          }
        >
          <p>
            This option is not available for as-needed medication schedules,
            because the schedule post editing will not reflect accurate time
            gaps. This option is available for medications and treatments that
            are not given on an as-needed basis (see below).
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>What is the administration site option?</div>}
        >
          <p>
            Medications that are not given orally, such as creams or injections,
            are applied to different parts of the body. For example, cream
            application sites can change; and many injections’ directions of use
            require rotating the injection site.
            <br />
            If you are giving your child a medication of this kind (rather than
            an oral medication or a suppository), consider utilizing the
            Application Site option to track the different/changing sites.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I just want to track some occasional doses I give my child without
              managing a schedule. How do I do that?
            </div>
          }
        >
          <p>
            From your child’s dashboard, or the Navigator button, go to the
            Tracking Hub. There, choose the Treatment W/O a Schedule option to
            track doses given without a schedule.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              Will I get multiple reminders for each dose? What if I want to
              delay a dose?
            </div>
          }
        >
          <p>
            You will get a total of 4 reminders for each dose. To delay a dose,
            tap the “Snooze” button and choose the right option for you.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>Why is the Episode paused after 4 reminders?</div>}
        >
          <p>
            Reminders for each dose are sent during the first hour after the
            dose becomes available. If you don’t respond to these 4 reminders,
            there’s probably a good reason for it (your child is napping, or
            happily playing, or simply doing better for the time being), so we
            stop sending them and keep the schedule paused until it’s the right
            time for you to resume it. When you’re ready to resume, the schedule
            will auto update for future doses.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>Can I pause the schedule?</div>}>
          <p>
            Yes, you can do that through the edit button available on the top
            right corner of the schedule. Reminders will be paused until you’re
            ready to resume, and the schedule will auto update for future doses.
            <br />
            If you’re managing an episode of two as-needed medications, that are
            not acetaminophen or ibuprofen, you also have the option of pausing
            one of them, and resuming when you’re ready.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I accidentally tapped “Dose Given”, can I edit the administration
              time of a single dose?
            </div>
          }
        >
          <p>
            This option is not available for as-needed medication schedules,
            because the schedule post editing will not reflect accurate time
            gaps. This option is available for medications and treatments that
            are not given on an as-needed basis (see below).
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>What is the administration site option?</div>}
        >
          <p>
            Medications that are not given orally, such as creams or injections,
            are applied to different parts of the body. For example, cream
            application sites can change; and many injections’ directions of use
            require rotating the injection site.
            <br />
            If you are giving your child a medication of this kind (rather than
            an oral medication or a suppository), consider utilizing the
            Application Site option to track the different/changing sites.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I just want to track some occasional doses I give my child without
              managing a schedule. How do I do that?
            </div>
          }
        >
          <p>
            From your child’s dashboard, or the Navigator button, go to the
            Tracking Hub. There, choose the Treatment W/O a Schedule option to
            track doses given without a schedule.
          </p>
        </Collapsible>
        <h2 ref={medicineRef}>Medicine and Other Treatments on a Schedule</h2>
        <Collapsible
          trigger={
            <div>
              What is the difference between a short-term schedule and an
              ongoing one?
            </div>
          }
        >
          <p>
            When your child is getting a treatment with a final number of doses
            - antibiotics is a good example - please choose the short-term
            schedule option for the most useful experience. The doses on this
            schedule are marked numerically, so that you can verify all required
            doses were given. There is also a special adaptation for missed
            doses (see below - “what happens to the schedule if I didn’t respond
            to any of the 4 reminders?”).
            <br />
            For any medicine, supplement or other treatment given to your child
            on an ongoing basis, without a definite ending date, please choose
            the ongoing schedule option.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I’m giving a medicine or treatment that is not on the list of
              medications on the app. How do I add it?
            </div>
          }
        >
          <p>
            You can type the medicine name to add it manually, and then continue
            to set the schedule.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              Will I get multiple reminders for each dose? What if I want to
              delay a dose?
            </div>
          }
        >
          <p>
            You will get a total of 4 reminders for each dose. To delay a dose,
            tap the “Snooze” button and choose the right option for you.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              What happens if I didn’t respond to any of the 4 reminders?
            </div>
          }
        >
          <p>
            For short-term schedules: you will be asked to choose between “Give
            the dose now” when you open the schedule, or “skip and add to end”.
            Both choices ensure that the total number of doses is retained.
            Please choose in accordance with your provider’s or pharmacist’s
            instructions. For ongoing schedules: you will be asked to choose
            between “Give the dose now” or “skip”. Please choose in accordance
            with your provider’s or pharmacist’s instructions.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              How do I edit the dose; reminder times; or any other value on the
              schedule?
            </div>
          }
        >
          <p>
            From the edit button, available on the top right corner of the
            schedule, you can edit the various values of the schedule. Tap
            “Save” when you're done to apply the edits made.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>Can I pause the schedule?</div>}>
          <p>
            Yes, you can do that from the edit button available on the top right
            corner of the schedule. Reminders will be paused until you’re ready
            to resume.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>What about provider’s follow ups or medication refills?</div>
          }
        >
          <p>
            The option to set reminders for these will be available to you in
            the schedule form.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I accidentally tapped “Dose Given”, can I edit the administration
              time of a single dose?
            </div>
          }
        >
          <p>
            Yes, this option is available from the given doses column of the
            schedule. Please note, that editing the timing of a given dose will
            not change the timing of future doses on that schedule.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I gave my child some doses before adding the schedule on the app.
              How do I track those?
            </div>
          }
        >
          <p>
            For short-term schedules, tracking the doses given previously is
            done during schedule set up. For ongoing schedules, you can add
            these either during setup or at any time afterwards, from the edit
            button available at the top right corner of the schedule.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>What is the administration site option?</div>}
        >
          <p>
            Medications that are not given orally, such as creams or injections,
            are applied to different parts of the body. For example, cream
            application sites can change; and many injections’ directions of use
            require rotating the injection site.
            <br />
            If you are giving your child a medication of this kind (rather than
            an oral medication or a suppository), consider utilizing the
            Application Site option to track the different/changing sites.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I just want to track some occasional doses I give my child without
              managing a schedule. How do I do that?
            </div>
          }
        >
          <p>
            From your child’s dashboard, or the Navigator button, go to the
            Tracking Hub. There, choose the Treatment W/O a Schedule option to
            track doses given without a schedule.
          </p>
        </Collapsible>
        <h2 ref={familyRef}>Care Family</h2>
        <Collapsible
          trigger={<div>How many Care Family Members can I add?</div>}
        >
          <p>
            There is no limit on the number of people you can add as care family
            members. We know it takes a village! You can easily edit the care
            family and remove certain members if needed.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              If I added a Care Family member, do they need to pay for a
              subscription as well?
            </div>
          }
        >
          <p>
            One subscription payment covers the entire care family. All added
            care family members will have the same access to Encurage Premium.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              Do my Care Family members need to login to my account to use the
              app?
            </div>
          }
        >
          <p>
            Each care family member will have their own account. No need to
            login to other users’ accounts. All actions done on the app, and all
            recorded data, will be available simultaneously on all of the
            accounts belonging to a certain care family.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>Who can add and remove Care Family members?</div>}
        >
          <p>
            The user that subscribed to Encurage Premium and started the Care
            Family is the “admin” in charge of editing the Care Family,
            including adding and removing members.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I remove a Care Family Member?</div>}>
          <p>
            Tap the card of the care family member you want to remove. A
            “Remove” option will appear.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              I was added as a Care Family member, and I don’t see any
              children’s profiles on my account?
            </div>
          }
        >
          <p>
            If the data does not immediately show on your account after you have
            successfully entered your code, please try logging out of your
            account from the settings menu, or by force closing the app, and
            then logging in again. If the issue persists, please contact us
            through the “Contact Support” button on the app.
          </p>
        </Collapsible>
        <h2 ref={trackingHubRef}>Tracking Hub</h2>
        <Collapsible
          trigger={
            <div>
              How do I track a symptom, side effect, vital or therapy that is
              not included in the corresponding categories’ lists?
            </div>
          }
        >
          <p>
            We comprised extensive lists, covering the most common tracked
            values among children. If a certain value is currently not included,
            you can tap “other” to add the name manually, and the rest of the
            tracking tools for that value will be available. We would also love
            to hear from you if there are values you would like to see added to
            our future releases. Drop us a line through the “Contact Support”
            button on the settings menu.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>What are the folders?</div>}>
          <p>
            The folders available for each tracking category are a convenient
            way to organize the various trackings. They allow quick access to
            separate issues or subjects you may use the tracking for, such as
            separate ongoing conditions, and specific fever or infection
            episodes.
            <br />
            If you’re not interested in creating separate folders, you can save
            all of the trackings under the default “General” folder.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I edit trackings?</div>}>
          <p>
            Through the edit button, you can edit the various values you added
            to each tracking. Tap “Save” when you're done to apply the edits
            made.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I delete trackings?</div>}>
          <p>
            The edit button is available for each tracking category, and you can
            edit all values, including deletion of the entire tracking, at any
            time. Please note that once you delete a tracking, it cannot be
            restored.
          </p>
        </Collapsible>
        <h2 ref={journalRef}>Journal</h2>
        <Collapsible
          trigger={
            <div>
              What is the purpose of the Journal? How is it different from
              tracking in the Tracking Hub?
            </div>
          }
        >
          <p>
            We want to help parents with monitoring and assessing children’s
            reaction to, and progress with, their treatment plan. While tracking
            symptoms and side effects plays an important role in helping the
            healthcare provider to diagnose and set a treatment plan, the
            Journal focuses on a variety of subjects that are considered as key
            factors of progress assessment, and helps both parents and
            healthcare providers to reshape and optimize their child’s treatment
            plan.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>What are the folders?</div>}>
          <p>
            The folders are a convenient way to organize your child’s various
            health journeys. They allow quick access to separate aspects you may
            use the Journal for, such as separate ongoing conditions. If you’re
            not interested in creating separate folders, you can save all of the
            Stories under the default “General” folder.
          </p>
        </Collapsible>
        <Collapsible trigger={<div>How do I edit Stories?</div>}>
          <p>
            Through the edit button, you can edit the various values you added
            to each Story, including editing or deleting each subject added to
            that Story. Tap “Save” when you're done to apply the edits made.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<div>How do I delete Stories added to the Journal?</div>}
        >
          <p>
            The edit button is available for each Story added to the Journal,
            and you can edit all values, including the deletion of the entire
            Story, at any time. Please note that once you delete a Story, it
            cannot be restored.
          </p>
        </Collapsible>
      </div>
    </main>
  );
};
