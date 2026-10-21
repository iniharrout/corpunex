import Link from "next/link";
import { ArrowRight, BadgeCheck, Landmark, MapPin, ReceiptText, Search, ShieldCheck } from "lucide-react";
import { Calculator, Calendar, Medal, Rocket } from "@/components/illustrations/Spots";
import CallbackButton from "@/components/callback/CallbackButton";
import CallbackLink from "@/components/callback/CallbackLink";
import { timeline } from "@/config/site";
import s from "./Hero.module.css";

/**
 * Homepage hero: a brand-blue band with the company-name search as the main
 * action, an illustrated stack of the documents a founder receives (generic,
 * aria-hidden, not a real certificate), and a bento of services rising out
 * of the band.
 */
export default function Hero() {
  return (
    <>
      <section className={s.hero} aria-labelledby="hero-title">
        <div className={`wrap ${s.inner}`}>
          <div className={s.copy}>
            <p className={s.kicker}>
              <ShieldCheck size={16} strokeWidth={2} aria-hidden />
              Filings prepared and certified by CAs and CSs
            </p>
            <h1 id="hero-title" className={s.title}>
              Start your company in India, <em>the right way.</em>
            </h1>
            <p className={s.lead}>
              Check your company name, then let us register it, set up GST and handle every yearly filing. You get a
              clear, itemised quote before anything starts.
            </p>

            <form className={s.search} action="/tools/company-name-search">
              <Search size={20} strokeWidth={2} aria-hidden className={s.searchIcon} />
              <label htmlFor="hero-name" className="visually-hidden">
                Your company name
              </label>
              <input id="hero-name" name="q" placeholder="Type the company name you want" autoComplete="off" />
              <button type="submit">
                Check name
                <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
              </button>
            </form>
            <p className={s.alt}>
              Not sure what you need? <CallbackLink className={s.altLink} />
            </p>

            <ul className={s.trust}>
              <li>
                <BadgeCheck size={16} strokeWidth={2} aria-hidden /> Usually {timeline.short}
              </li>
              <li>
                <ReceiptText size={16} strokeWidth={2} aria-hidden /> Government fees at actual cost
              </li>
              <li>
                <MapPin size={16} strokeWidth={2} aria-hidden /> Bhubaneswar and New Delhi
              </li>
            </ul>
          </div>

          <div className={s.stack} aria-hidden>
            <div className={`${s.doc} ${s.docGst}`}>
              <p className={s.docTag}>GST</p>
              <p className={s.docTitle}>GST Registration Certificate</p>
              <span className={s.line} />
              <span className={`${s.line} ${s.short}`} />
              <div className={s.gstin}>
                <span>GSTIN</span>
                <span className={s.mask} />
              </div>
            </div>
            <div className={`${s.doc} ${s.docPan}`}>
              <p className={s.docTag}>Company PAN</p>
              <p className={s.docTitle}>Permanent Account Number</p>
              <div className={s.panRow}>
                <span className={s.panChip} />
                <div>
                  <span className={s.line} />
                  <span className={`${s.line} ${s.short}`} />
                </div>
              </div>
            </div>
            <div className={`${s.doc} ${s.docCert}`}>
              <div className={s.seal}>
                <Landmark size={24} strokeWidth={1.75} />
              </div>
              <p className={s.certKicker}>Issued when you&apos;re registered</p>
              <p className={s.certTitle}>Certificate of Incorporation</p>
              <p className={s.certName}>Your Company Private Limited</p>
              <span className={s.line} />
              <span className={s.line} />
              <span className={`${s.line} ${s.short}`} />
            </div>
            <div className={s.toast}>
              <span className={s.toastIcon}>
                <BadgeCheck size={18} strokeWidth={2.25} />
              </span>
              <div>
                <p className={s.toastTitle}>Company registered</p>
                <p className={s.toastBody}>Certificate, PAN and TAN issued</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.bentoWrap} aria-label="Our services">
        <div className={`wrap ${s.bento}`}>
          <Link href="/services/business-registration" className={`${s.tile} ${s.big}`}>
            <Rocket className={s.art} />
            <span className={s.tileKicker}>Start a business</span>
            <span className={s.tileTitle}>Register your company</span>
            <span className={s.tileBody}>Private Limited, LLP, One Person Company or proprietorship, start to finish.</span>
            <span className={s.pills}>
              <span>Private Limited</span>
              <span>LLP</span>
              <span>OPC</span>
            </span>
            <span className={s.cta}>
              See your options <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
            </span>
          </Link>

          <Link href="/services/gst-taxation/gst-registration" className={`${s.tile} ${s.mint}`}>
            <Calculator className={s.artSmall} />
            <span className={s.tileTitle}>GST registration</span>
            <span className={s.tileBody}>Your GST number, checked before filing</span>
          </Link>

          <Link href="/services/trademark-ip/trademark-registration" className={`${s.tile} ${s.sun}`}>
            <Medal className={s.artSmall} />
            <span className={s.tileTitle}>Trademark</span>
            <span className={s.tileBody}>Protect your brand name and logo</span>
          </Link>

          <Link href="/services/corporate-compliance/annual-roc-compliance" className={`${s.tile} ${s.peach}`}>
            <Calendar className={s.artSmall} />
            <span className={s.tileTitle}>Yearly filings</span>
            <span className={s.tileBody}>ROC, tax and GST, done on time</span>
          </Link>

          <div className={`${s.tile} ${s.dark}`}>
            <span className={s.tileTitle}>Not sure where to start?</span>
            <span className={s.tileBody}>Tell us about your business and an advisor will call you back.</span>
            <CallbackButton variant="onInk" />
          </div>
        </div>
      </section>
    </>
  );
}
