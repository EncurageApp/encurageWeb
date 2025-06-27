import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const Terms = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Encurage</title>
        <meta name="description" content="Terms and Conditions" />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta property="og:description" content="Terms and Conditions" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta
          property="og:url"
          content="https://encurage.app/helpcenter/Terms"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta name="twitter:description" content="Terms and Conditions" />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="terms-conditions">
        <h2>Terms & Conditions</h2>

        <p>
          Welcome To Encurage.
          <br />
          These Terms and Conditions ("Terms and Conditions") is a legally
          binding agreement between you, the person or entity that will be
          utilizing Encurage's mobile application (referenced below as "You" or
          "Your"), and Myrtus Enterprise LLC ("Encurage" or "We"), with respect
          to the mobile application Encurage, previously named “OnCure” (the
          "App").
          <br />
          By installing, downloading, copying, accessing, or using the App, You
          acknowledge that You have read, understood, and agree, and accept the
          Terms and Conditions hereof. Encurage reserves the right, in its sole
          discretion, to modify these Terms and Conditions at any time by
          posting the modified provisions on the App and/or on www.encurage.app
          (the “Website”), and You shall be responsible for reviewing the
          Website and/or the Terms and Conditions section of the App
          periodically and becoming familiar with any such modifications. Please
          note that any such modifications shall become effective immediately
          upon posting.
          <br />
          You should also be aware that We may collect, use and share various
          types of personal information in connection with Your use of the App,
          as described in our Privacy Policy. We recognize the importance of
          protecting personal information shared by You, and make a good faith
          effort to store it securely, subject to the provisions described in
          our Privacy Policy. Please review our Privacy Policy in addition to
          these Terms and Conditions. By agreeing to these Terms and
          Conditions,You are also agreeing to our Privacy Policy as if it were
          repeated here in its entirety.
          <br />
          IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, AND TO ALL
          THE PROVISIONS OF THE PRIVACY POLICY, IN THEIR ENTIRETY, DO NOT ACCESS
          OR USE ANY PART OF THE APP. IF YOU DO NOT WISH TO AGREE TO ANY
          CHANGE/S MADE TO THESE TERMS AND CONDITIONS, OR CHANGE/S MADE TO THE
          PRIVACY POLICY IN ACCORDANCE WITH ITS PROVISIONS, PLEASE CEASE ALL
          USAGE OF THE APP, DELETE YOUR ACCOUNT AND DELETE ALL COPIES OF THE APP
          FROM ALL YOUR DEVICES.
        </p>

        <h3>1. THE APP AND PROPOSED SERVICES</h3>

        <p>
          1.1 THE APP IS NOT A MEDICAL DEVICE, AND IS FOR INFORMATIONAL PURPOSES
          ONLY. NOTHING IN THE APP IS INTENDED TO PROVIDE, AND DOES NOT PROVIDE,
          NOR DOES ITS CONTENT CONSTITUTE, MEDICAL INFORMATION AND/OR MEDICAL
          ADVICE AND/OR PERSONAL ADVICE AND/OR DIAGNOSIS AND/OR ASSISTANCE IN
          DIAGNOSIS OF ANY KIND.
          <br />
          1.2 THE USE OF THE APP IS AT YOUR OWN RISK. YOU SHOULD ALWAYS, PRIOR
          TO ANY USE OF THE APP, SEEK AND CAREFULLY FOLLOW ALL OF YOUR CHILD’S
          PEDIATRICIAN’S AND/OR PHARMACIST'S INSTRUCTIONS, DIRECTIONS,
          GUIDELINES OR ANY OTHER MEDICAL ADVICE. INSOFAR AS A MEDICAL ADVICE
          AND/OR OTHER PERSONAL ADVICE IS REQUIRED IN CONNECTION WITH
          ADMINISTRATING YOUR CHILD ANY MEDICINE AND/OR SUPPLEMENT AND/OR ANY
          OTHER SUBSTANCE, YOU ARE SOLELY RESPONSIBLE FOR OBTAINING IT
          SEPARATELY AND INDEPENDENTLY.
          <br />
          1.3 FURTHERMORE, THE APP IS NOT INTENDED TO BE USED IN ANY SITUATION
          OR CIRCUMSTANCES THAT MAY BE CONSIDERED AS AN EMERGENCY. IN ANY EVENT
          THAT MAY BE CONSIDERED AS AN EMERGENCY, YOU SHOULD IMMEDIATELY SEEK
          URGENT MEDICAL CARE AND NOT USE THE APP.
          <br />
          1.4 YOU ASSUME ALL LIABILITY FOR ANY PERSONAL INFORMATION AND MEDICAL
          OR HEALTH INFORMATION THAT IS CREATED OR STORED OR UPLOADED ON THE APP
          BY YOU, AND YOU AGREE TO FULLY INDEMNIFY AND HOLD ENCURAGE HARMLESS
          FROM ANY LIABILITY, EXPENSE, SUIT, ACTION OR CLAIM (INCLUDING
          REGULATORY PROCEEDINGS) RELATED TO YOUR BREACH OF THESE TERMS AND
          CONDITIONS INCLUDING, WITHOUT LIMITATION, ANY LIABILITY, EXPENSE,
          SUIT, ACTION OR CLAIM THAT ARISES THROUGH YOUR USE OF THE APP.
          <br />
          1.5 WITHOUT, IN ANY WAY, DEROGATING FROM THE GENERALITY OF THE
          FOREGOING, YOU EXPRESSLY APPROVE THAT BY ADDING A CHILD'S PROFILE TO
          THE APP, AND THEN ADDING ANY MEDICINE AND/OR SUPPLEMENT AND/OR
          SUBSTANCE SCHEDULES, PROMPTING REMINDERS SENT BY THE APP IN CONNECTION
          WITH SAID SCHEDULES, THE CHILD IS NOT PREVENTED FROM BEING
          ADMINISTERED ANY SUCH MEDICINE AND/OR SUPPLEMENT AND/OR SUBSTANCE, AND
          THAT ALL VALUES AND DATA ADDED BY YOU IN ORDER FOR THE APP TO GENERATE
          SUCH SCHEDULES AND SEND YOU REMINDERS WERE ADDED IN ACCORDANCE WITH
          PROPER MEDICAL ADVICE OBTAINED PRIOR TO THE ADDITION OF SAID
          SCHEDULES.
        </p>

        <h3>2. INTENDED USERS AND ELIGIBILITY TO USE THE APP</h3>
        <p>
          2.1 The services offered through the App are intended solely for users
          who are eighteen (18) years of age or older on the day they are first
          accessing, downloading or using the App, with the sole exception of
          any person who is at least sixteen (16) years old at such date, and
          that has obtained the permission of their parent or legal guardian to
          download and use the App. Any usage of the App that does not align
          with the above constitutes a violation of these Terms and Conditions.
          In addition to the above specified conditions, You must also be of
          legal age to form a binding contract and must agree to be bound by
          these Terms and conditions. If You are at least 16 years old but
          younger than 18 years old, Your parent or legal guardian must agree to
          be bound by these Terms and Conditions. If You do not meet any and all
          of these criteria, PLEASE DO NOT ACCESS OR USE ANY PART OF THE APP.
          <br />
          2.2 Please do not provide any type of information in connection with a
          child under eighteen (18) years of age, unless You are that child’s
          parent or legal guardian, or unless You have obtained that child’s
          parents’ or guardians’ consent, including their consent to our Privacy
          Policy. If a parent or a legal guardian believes that their child, or
          a child under their custody or legal guardianship has provided
          Personal Information to Us, or that Personal Information of their
          child, or a child under their custody or legal guardianship has been
          provided to Us by a third party without their consent, they can
          contact us as specified in the Contact section of these Terms and
          Conditions, and upon verifying that Personal Information has thus been
          provided, We will take steps to delete it within a reasonable period
          of time.
        </p>

        <h3>3. ENCURAGE CONTENT AND LICENSE TO USE THE APP</h3>

        <p>
          3.1 Encurage retains all rights, title, and interest in and to the
          App, including all related intellectual property rights. Subject to
          these Terms and Conditions, Encurage hereby grants You a limited,
          personal, non-transferable, non-exclusive, non-assignable,
          non-sub-licensable license to install, access, and use the App,
          provided that You will not alter or modify any part of the App. Except
          as expressly provided herein, no other rights or licenses, expressed
          or implied, are granted to You by Encurage with respect to the App,
          including any intellectual property right, whether registered or not.
          <br />
          3.2 All photos, texts, scripts, designs, graphics, logos, audios,
          videos, songs, music, interactive features, interfaces, software,
          code, trademarks, service marks, trade names and other content
          ("Content") used, displayed, included, incorporated, uploaded, posted
          or published by Encurage or other third parties, as part of the App,
          are the sole property of Encurage and/or their licensors ("Encurage
          Content"), subject to copyright and other intellectual property rights
          under applicable laws, and You may not use, download, distribute
          and/or copy them, in whole or in part, without the prior written
          permission of Encurage. For the sake of clarity, You may not copy,
          reproduce, modify, publicly display, publicly perform, publish,
          distribute, sell, license, rent, transfer, reproduce, create
          derivative works based on, or exploit in any way, Encurage Content or
          any part thereof.
        </p>
        <h3>4. PROHIBITED USE</h3>
        <p>
          4.1 You hereby undertake that You will not, and will not permit or
          authorize third parties to use the App in any way that: (i) is related
          to any commercial purpose; (ii) is defamatory, abusive, harassing,
          threatening, racially discriminatory, or constitute an invasion of a
          right of privacy of another person, or otherwise offensive, violent,
          vulgar, obscene, or otherwise harms or can reasonably be expected to
          harm any person or entity; (iii) infringes, violates, misuses or
          otherwise interferes with any copyright, patent, trademark, trade
          secret or other intellectual property right or contractual rights of
          any third party; (iv) is illegal or encourages or advocates illegal
          activity; (v) post or transmit any communication or solicitation
          designed or intended to obtain password, account, or private
          information from any third party; (vi) use any equipment, software or
          other item that contains viruses, trojan horse, worm,RATs, keyboard
          loggers, time bombs, spyware, adware, cancelbots, passive collection
          mechanisms (“PCMs”), or any other malicious or invasive code or
          computer program designed to interrupt, destroy, or limit the
          functionality of the App or any system, computer software, hardware or
          telecommunications equipment; or upload or transmit (or attempt to
          upload or to transmit) any material that acts as a passive or active
          information collection or transmission mechanism; (vii) create a false
          identity or impersonate another person; (viii) “stalk” or otherwise
          harass another or is antisocial, disruptive, or destructive, including
          “flaming“, “spamming“, “flooding“, “trolling“, and “griefing“ as those
          terms are commonly understood and used on the internet; or (ix)
          violate these Terms and Conditions and/or any applicable local, state,
          national or international law or regulation.
          <br />
          4.2 In addition, except as expressly authorized herein, You will not,
          and will not permit or authorize third parties to: (i) take any action
          intended to circumvent or disable the operation of any security
          feature or measure of the App; (ii) publish, distribute, sell,
          disclose, market, sublicense, rent, lease, display, provide, transfer
          or make available the App, or any portion thereof, to any third party;
          (iii) copy or adapt the App’s or any part of the App’s software,
          including but not limited to any code used by Encurage; (iv)
          decompile, reverse engineer, disassemble, enhance, modify or otherwise
          make any attempt to discover the source code or object code of the App
          or any part thereof; (v) modify, reproduce, or create derivative works
          from the App or any part thereof; (vi) access the App or Encurage's
          facilities via the use, launch, development or distribution of
          automated means, including by crawling, scraping, caching, operating a
          robot (or “bot”), cheat utility, or offline reader or otherwise
          (except as may be the result of standard search engine protocols or
          technologies used by a search engine with our express consent); or
          (vii) use the App in any manner that is not in strict adherence with
          any law, or not authorized by these Terms and Conditions.
        </p>
        <h3>5. FREE SERVICES; PREMIUM SERVICES; PAYMENTS; AUTO RENEWALS</h3>
        <p>
          5.1 Encurage offers certain free services that You can utilize by
          downloading, installing and using the App (“Free Services”). We may
          also offer You additional services (“Premium Services''), of various
          contents and scope that We may determine in accordance with our sole
          discretion, including without limitation, services that may be
          accessed by means of purchasing an auto-renewing subscription. You
          acknowledge that Encurage may charge a fee for the use of any Premium
          Services, provided that We notify You of any such fee before You are
          required to pay for it for the first time.
          <br />
          5.2 If You agree to purchase Premium Services that are accessible by
          means of purchasing an auto renewal subscription, then Your agreement
          to said purchase includes the agreement that You may only terminate
          such auto renewal in accordance with the processes described hereunder
          in this article 4, or as may be set forth on the App.
          <br />
          5.3 Other than a limited, personal, revocable, non-transferable,
          non-sublicensable license to use any Premium Services that You have
          purchased, You have no right or title in or to any such Premium
          Services or any part thereof, or any other attributes in connection
          with use of the Premium Services or stored within the Premium
          Services. Your right to use Premium Services is not transferable by
          You and, as with all materials available to You by means of
          downloading, installing and using the App, may not be resold,
          repackaged, sublicensed or otherwise made available to third parties.
          <br />
          5.4 Encurage reserves the right to modify, cancel and/or limit the
          features and/or services available through the Free services, as well
          as modify and/or add to any of the features and/or services included
          in the Premium Services, and add more Premium Services, at any time.
          Without derogating from the generality of the above, We may, in
          addition to any other changes, change the scope of Premium Services
          that You purchased, discontinue any feature or functionality that were
          included in the Premium Services, or start providing services that
          were included in the Premium Services for free. We may apply any such
          changes in any way and at any time.
          <br />
          5.5 You will be able to access a description of the payment terms for
          any Premium Services, that are incorporated here in full by
          reference,and confirm the purchase and its terms, on the payment page
          of the App. Additional terms are specified hereunder. Payment for
          Premium Services will be made through Apple, Inc.’s App Store or
          Google LLC’s Google Play Store, depending on the system through which
          You obtained the App, upon confirmation of purchase. You agree to pay
          the fee connected to the Premium Services You subscribed for, through
          one of these systems as applicable to Your device.
          <br />
          5.6 A subscription You purchased for Premium Services will continue
          indefinitely until canceled by You, or unless We specifically stated
          otherwise at the time of purchase. After Your initial subscription
          period, and again after any subsequent subscription period, Your
          subscription will automatically continue for an additional equivalent
          period (“Automatic Renewal”), and Your account will be billed the
          price You agreed to when subscribing during the 24-hour period prior
          to the expiration of Your then current period, unless You turn off the
          auto-renewal at least 24-hours prior to the end of the then current
          period.
          <br />
          5.7 In the event You wish to change or terminate Your subscription,
          please log in and go to Your AppleID/Google settings. Accessing Your
          Apple ID/Google settings is the only way to change or cancel Your
          subscription. If You cancel Your subscription, You may use Your
          subscription until the end of Your then current subscription period,
          and it will not be renewed thereafter, but You will not be eligible
          for a prorated refund of any portion of the subscription fee paid for
          the then current subscription period.
          <br />
          5.8 We may offer You, in accordance with our sole discretion, a free
          trial period, during which You will be able to experience the Premium
          Services, and following which You would become a paid subscriber. Your
          free trial period may only be exercised starting at its commencement
          time and during its set period, and cannot be reserved, in whole or in
          part, for a different time period. If You do not wish to become a paid
          subscriber following the free trial period, You must cancel Your
          subscription before the end of the free trial period. If You decide to
          purchase the Premium Services prior to the end of any free trial, You
          will not be eligible to any rights, including without limitation a
          refund, in connection with the remainder of the free trial.
          <br />
          5.9 Your agreement to subscribe authorizes Apple Inc. or Google LLC,
          as applicable, to charge Your account at the time You confirmed Your
          subscription, and then again at the beginning of any subsequent
          subscription period, including any sales tax or any other taxes
          imposed on Your subscription payments in accordance with any law. If
          You fail to make the required payment at any of the subscription
          renewal dates, You agree that We may terminate or suspend Your
          subscription. We may also ask Apple Inc. or Google LLC, as applicable,
          to continue to attempt to charge Your account until payment is
          received, and upon receipt of payment, Your subscription will be
          reactivated, and Your new subscription period will begin as of the day
          payment was received.
        </p>
        <h3>6. GENERAL TERMS OF USE</h3>
        <p>
          6.1 You are responsible for obtaining and maintaining any equipment,
          hardware, software or ancillary services required to access and use
          the App, and for any fees charged by third parties in connection
          therewith, and Encurage shall have no responsibility or obligation in
          connection therewith.
          <br />
          6.2 If You send Encurage feedbacks or suggestions regarding the App,
          You acknowledge that Encurage may use them at its sole discretion,
          without any obligation to compensate You in any manner for such
          feedbacks or suggestions.
          <br />
          6.3 Encurage may change, suspend or discontinue the App at any time,
          including the availability of any feature, content or database,
          without notice or liability.
          <br />
          6.4 It is hereby clarified, that the App may contain links to other
          third parties' websites, applications or features, or referrals to
          certain third parties’ products or services that are not owned or
          controlled by Encurage and that Encurage has no control over. If You
          choose to visit such third party’s websites, applications or features,
          or use its products or services, please be aware that such third
          party’s own terms of use and privacy policy will apply and govern Your
          activities. Encurage does not make any representation or warranty
          whatsoever regarding such third party's websites, applications,
          features, services, products or content. Encurage also does not
          endorse and cannot ensure that You will be satisfied with any content,
          products or services that You accessed, purchased or downloaded from
          such other third parties, and is not responsible or liable in any
          manner for Your interaction with such third parties.
        </p>
        <h3>7. USAGE RULES</h3>
        <p>
          Since You are downloading the App from a third party platform, service
          provider or distributor, such as Apple App Store, Google Play Store,
          etc. (the “Platform Provider“), be aware that You may also be governed
          by usage rules which the Platform Provider may have established and
          which relate to Your download and/or use of the App.
        </p>
        <h3>8. WARRANTY AND DISCLAIMER</h3>
        <p>
          YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE APP IS AT YOUR
          SOLE RISK AND THAT THE ENTIRE RISK AS TO THE USE OF THE APP, INCLUDING
          ANY AND ALL CONSEQUENCES ARISING FROM SUCH USE IS SOLELY WITHIN YOU.
          WITHOUT DEROGATING FROM THE GENERALITY OF THE FOREGOING, YOU
          SPECIFICALLY ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK TO THE
          SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS SOLELY WITH
          YOU. ALTHOUGH WE USE COMMERCIALLY REASONABLE MEANS TO KEEP THE APP
          FREE FROM VIRUSES, WORMS, TROGAN HORSES OR ANY OTHER CODE CONTAINING
          DESTRUCTIVE PROPERTIES, WE DO NOT WARRANT OR GUARANTEE THAT THE APP
          WILL BE FREE OF THESE, AND WE HAVE NO OBLIGATION TO PROVIDE ANY
          CERTAIN LEVEL OR DEGREE OF TECHNICAL SUPPORT OR MAINTENANCE FOR THE
          APP. THE APP IS SUPPLIED "AS IS'', AND WITHOUT WARRANTY OF ANY KIND.
          ENCURAGE DOES NOT WARRANT THAT THE USE OF THE APP WILL BE
          UNINTERRUPTED, ERROR-FREE OR WILL MEET YOUR SPECIFIC REQUIREMENTS.
          ENCURAGE MAKES NO WARRANTY OR REPRESENTATION, EITHER EXPRESS OR
          IMPLIED, REGARDING THE APP, ITS CONTENT AND YOUR USE THEREOF,
          INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, ACCURACY,
          AVAILABILITY, SECURITY, COMPATIBILITY, NON-INFRINGEMENT OR
          COMPLETENESS OF RESPONSES, RESULTS AND LACK OF NEGLIGENCE. WITHOUT
          DEROGATING FROM THE GENERALITY OF THE FOREGOING, YOU ACKNOWLEDGE AND
          AGREE THAT ENCURAGE SHALL NOT BE LIABLE FOR ANY FAILURE OF THE APP.
          SUCH FAILURE MAY BE CAUSED BY VARIOUS REASONS, INCLUDING, BUT NOT
          LIMITED TO, CIRCUMSTANCES OUT OF ENCURAGE’S REASONABLE CONTROL, SUCH
          AS MECHANICAL, ELECTRONIC OR COMMUNICATIONS FAILURE. YOU FURTHER AGREE
          THAT ENCURAGE SHALL NOT BE LIABLE TO YOU FOR ANY LOSS OF MATERIALS,
          CONTENT, OR ANY MODIFICATION, SUSPENSION OR DISCONTINUANCE OF THE
          SERVICES. WE ARE NOT RESPONSIBLE FOR ANY TECHNICAL MALFUNCTION OR
          OTHER PROBLEMS IN CONNECTION WITH TELEPHONE NETWORK, TELEPHONE OR
          MOBILE PHONE SERVICE, COMPUTER SYSTEMS, SERVERS, MOBILE PHONE OR
          INTERNET PROVIDERS, COMPUTER OR MOBILE PHONE EQUIPMENT, SOFTWARE,
          FAILURE CAUSED BY TECHNICAL PROBLEMS OR TRAFFIC CONGESTION ON THE
          INTERNET, INCLUDING INJURY OR DAMAGE TO YOUR OR TO ANY OTHER PERSON’S
          COMPUTER, MOBILE PHONE OR OTHER SOFTWARE OR HARDWARE, IN CONNECTION
          WITH USING OR DOWNLOADING THE APP.
        </p>

        <h3>9. LIMITATION OF LIABILITY</h3>
        <p>
          IN NO EVENT AND UNDER NO CIRCUMSTANCES SHALL ENCURAGE, ITS
          SHAREHOLDERS, DIRECTORS, OFFICERS OR EMPLOYEES, BE LIABLE FOR ANY
          PERSONAL INJURY, INCLUDING DEATH, LOSS OF CONTENT, OR ANY SPECIAL,
          INCIDENTAL, PUNITIVE, CONSEQUENTIAL OR INDIRECT DAMAGES, INCLUDING
          LABOR COSTS, LOSS OF DATA, LOSS OF GOODWILL, LOSS OF PROFITS, LOSS OF
          SAVINGS, LOSS OF BUSINESS INFORMATION, OR LOSS OF USE OR OTHER
          PECUNIARY LOSS, IN CONNECTION WITH OR ARISING OUT OF THESE TERMS AND
          CONDITIONS, THE APP, ANY TRANSACTION, OR YOUR USE OF OR INABILITY TO
          USE THE APP, HOWEVER CAUSED, ON ANY THEORY OF LIABILITY, REGARDLESS OF
          WHETHER ENCURAGE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          IN NO CASE SHALL THE AGGREGATE LIABILITY OF ENCURAGE AND ITS
          SHAREHOLDERS, DIRECTORS, OFFICERS AND EMPLOYEES UNDER THESE TERMS AND
          CONDITIONS OR ARISING OUT OF OR OTHERWISE RELATED TO YOUR USE OF THE
          APP EXCEED ONE HUNDRED US DOLLARS. WITHOUT DEROGATING FROM THE
          FOREGOING, ENCURAGE ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I)
          ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) ANY UNAUTHORIZED
          ACCESS TO OR USE OF OUR SERVERS (INCLUDING WITH RESPECT TO THE
          APPLICABLE CLOUD SERVICE PROVIDER’S SERVERS), THE APP AND/OR ANY AND
          ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
          (III) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR
          SERVICE AND/OR APP, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
          WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE AND/OR APP THROUGH
          THE ACTIONS OF ANY THIRD PARTY, (V) ANY INFORMATION AND/OR CONTENT
          SUBMITTED BY ANY OTHER USER, (VI) ANY DEFAMATORY, OFFENSIVE OR ILLEGAL
          CONDUCT OF A THIRD PARTY, AND/OR (VII) ANY ERRORS OR OMISSIONS IN ANY
          CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF
          THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE
          AVAILABLE VIA THE APP.
        </p>
        <h3>10. INDEMNIFICATION AND WAIVER</h3>
        <p>
          UPON ITS FIRST DEMAND, YOU WILL INDEMNIFY AND HOLD ENCURAGE, ITS
          SHAREHOLDERS, DIRECTORS, OFFICERS AND EMPLOYEES, HARMLESS FROM ANY
          CLAIM, LIABILITY, COST, LOSS, DAMAGE AND EXPENSE (INCLUDING REASONABLE
          LEGAL FEES) CAUSED DUE TO YOUR ACCESS AND USE OF THE APP IN VIOLATION
          OF THESE TERMS AND CONDITIONS OR IN VIOLATION OR INFRINGEMENT OF ANY
          RIGHTS (INCLUDING, WITHOUT LIMITATION, PRIVACY RIGHT, COPYRIGHT, OR
          OTHER INTELLECTUAL PROPERTY RIGHTS) OF ANY THIRD PARTY. YOU AGREE TO
          WAIVE ALL CLAIMS AGAINST ENCURAGE FOR CLAIMS, SUITS, AND DEMANDS OF
          LIABILITY LOSS OR DAMAGE WHATSOEVER, INCLUDING REASONABLE ATTORNEYS
          FEES, WHETHER DIRECT OR CONSEQUENTIAL, ON ACCOUNT OF ANY LOSS, INJURY,
          DEATH OR DAMAGE TO ANY PERSON OR PROPERTY, OR ON ACCOUNT OF ANY LOSS
          OR DAMAGE TO BUSINESS OR REPUTATION OR PRIVACY OF ANY PERSON, ARISING
          IN WHOLE OR IN PART IN ANY WAY FROM YOUR ACCESS AND/OR USE OF THE APP,
          REGARDLESS OF WHETHER SUCH LOSS, INJURY, DEATH OR DAMAGE TO ANY PERSON
          OR PROPERTY RESULTS FROM, IN WHOLE OR IN PART, THE NEGLIGENCE, PRODUCT
          LIABILITY, OR STRICT LIABILITY OF ENCURAGE.
        </p>
        <h3>11. APPLE, INC.</h3>
        <p>
          If You have downloaded the App from Apple, Inc. 's (“Apple”) App Store
          or if You are using the App on an iOS device, You acknowledge that You
          have read, understood, and agree to the following notice regarding
          Apple. These Terms and Conditions are between You and Encurage only,
          Apple is not a party to them, and is not responsible for the App
          and/or its services and/or contents. Furthermore, Apple has no
          obligation whatsoever to provide any maintenance and support services
          in connection with the App. In the event of any failure of the App to
          conform to any applicable warranty, then You may notify Apple and
          Apple will refund any applicable purchase price for the App to You;
          and, to the maximum extent permitted by applicable law, Apple has no
          other warranty obligation whatsoever in connection with the App. Apple
          is not responsible for addressing any claims by You or any third party
          relating to the App, or Your possession and/or use of the App,
          including, but not limited to: (1) product liability claims; (2) any
          claim that the App fails to conform to any applicable legal or
          regulatory requirement; and (3) claims arising under consumer
          protection or similar legislation. Apple is not responsible for the
          investigation, defense, settlement and discharge of any third party
          claim that the App and/or Your possession and use of the App infringe
          that third party’s intellectual property rights. You agree to comply
          with any applicable third party terms when using the App, including
          the App Store Terms of Service. Apple, and Apple’s subsidiaries, are
          third party beneficiaries of these Terms and Conditions, and upon Your
          acceptance of these Terms and Conditions, Apple will have the right
          (and will be deemed to have accepted the right) to enforce this
          Agreement against You. You hereby represent and warrant that (1) You
          are not located in a country that is subject to a U.S. Government
          embargo, or that has been designated by the U.S. Government as a
          “terrorist supporting” country; and (2) You are not listed on any U.S.
          Government list of prohibited or restricted parties.
        </p>
        <h3>12. EXPORT RESTRICTION</h3>
        <p>
          Encurage operates and controls the App from its offices in Texas,
          United States. The contents and services provided on the App are not
          intended for distribution to and/or use by any person or entity in any
          jurisdiction or country, where such distribution or use would not be
          in adherence with any law or regulation, or which would subject
          Encurage to any registration requirement within such jurisdiction or
          country. Accordingly, those persons who choose to access and/or use
          the App from other locations do so on their own initiative and are
          solely responsible for compliance with local laws, if and to the
          extent local laws are applicable. Except as authorized by United
          States law, and the laws of the jurisdiction in which the App was
          obtained or is used, You may not download, use, export or re-export
          the App. Without derogating from the generality of the foregoing, the
          App may not be exported or re-exported into any U.S. embargoed
          countries, or to anyone in the United States Department of Commerce’s
          Table of Deny Orders, or the United States Treasury Department’s list
          of Specially Designated Nationals. You represent and warrant that You
          are not on any such list or located in any such country, and that You
          will not download and/or use the App for any purposes prohibited by
          U.S. or any other applicable law.
        </p>
        <h3>13. TERMINATION</h3>
        <p>
          These Terms and Conditions will remain in full force and effect until
          terminated in accordance with the provisions of this Termination
          section. You may terminate these Terms and Conditions at any time by
          uninstalling the App, destroying all copies of the App in Your
          possession or control from all Your devices and ceasing to use the
          App. Encurage may terminate these Terms and Conditions immediately
          upon notice to You, for any or no reason.These Terms and Conditions
          will terminate immediately without notice from Encurage if You fail to
          comply with any provision of these Terms and Conditions (including,
          without limitation, breach for nonpayment, if applicable). Any
          termination of these Terms and Conditions shall also terminate the
          licenses granted hereunder. Upon termination of these Terms and
          Conditions, You agree to immediately cease any usage of the App or any
          part of it, uninstall the App and destroy all copies of the App from
          all Your devices.Your representations, the Indemnification and Waiver
          section, the Limitation of Liability section, the jurisdiction and
          governing law provisions, and any other provision which by their
          nature are designed to survive termination shall survive any
          termination or expiration of these Terms and Conditions.
        </p>
        <h3>14. MISCELLANEOUS</h3>
        <p>
          These Terms and Conditions and its performance shall be governed
          exclusively by the laws of the State of Texas, without regard to
          conflict of law provisions that would result in the application of the
          laws of any other jurisdiction. The parties hereto submit the
          exclusive jurisdiction to the courts of Collin County, Texas.You
          acknowledge and agree that You have read the Encurage Privacy Policy
          located at the App or on the Website, or otherwise made available to
          You by Encurage, and consent to the handling and processing of Your
          data as described in the Encurage Privacy Policy. These Terms and
          Conditions and Privacy Policy constitute the entire agreement between
          You and Encurage with respect to the use of the App, and supersede all
          prior or contemporaneous understandings regarding such subject matter.
          The section headings used herein are for convenience only and shall
          not be given any legal importance.
          <br />
          Encurage reserves the right to update these Terms and Conditions from
          time to time, with or without notice. If so, Encurage will post its
          updated Terms and Conditions on the App and on the Website. Your
          continued use of our services will be subject to the then-current
          Terms and Conditions. If any modification is unacceptable to You, You
          should cease using the App. If You do not cease using the App, You
          will be deemed to have accepted those modifications.
          <br />
          Encurage may assign at any time any of its rights and/or obligations
          hereunder to any third party without Your consent. You may not assign
          these Terms and Conditions to any third party without Encurage’s prior
          written consent. These Terms and Conditions will also govern any
          future upgrades or updates or new releases provided by Encurage in
          connection with the App, unless any such upgrades or updates are
          accompanied by a separate license, in which case the terms of that
          separate license will govern.In the event that a court of competent
          jurisdiction finds any provision of these Terms and Conditions to be
          illegal, invalid or unenforceable, the remaining provisions will
          remain in full force and effect, and the invalidity of such provision
          shall not affect the validity of the remaining provisions of these
          Terms and Conditions, which shall remain in full force and effect. The
          failure of Encurage to enforce any right or provision included in
          these Terms and Conditions will not constitute a waiver of such right
          or provision, or any other right or remedy under applicable law,
          unless acknowledged and agreed by Encurage in writing.
        </p>
        <h3>15. HOW TO CONTACT US</h3>
        <p>
          If You have any questions, comments or requests in connection with
          these Terms and Conditions or our services in general, please do not
          hesitate to contact us via email at:{" "}
          <span>support@encurage.app.</span>
        </p>
      </div>
    </>
  );
};
