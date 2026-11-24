import { Button } from "@/components/ui/button";
import brandLogo from "@/assets/barnes-noble-logo.png.asset.json";
import { ChevronDown, Gift, ListChecks, MousePointerClick, Star } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

const claimUrl = "https://linkthem.net/?offer_id=4348&aff_id=174495";

const steps = [
  {
    number: "01",
    title: "Click the button below",
    description: "Tap the claim button to begin your reward journey.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Complete required offers",
    description: "Finish a few partner deals to unlock your reward.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Claim your $750 Barnes & Noble Gift Card",
    description: "Complete the required offers to claim your gift card.",
    icon: Gift,
  },
];

const questions = [
  {
    question: "Is this really free?",
    answer:
      "The offer requires completing 3–5 partner deals. Review each partner's terms, including any costs, before you continue.",
  },
  {
    question: "How long does it take to receive my gift card?",
    answer:
      "The offer page does not provide a delivery estimate. Timing may depend on completing and verifying the partner offers.",
  },
  {
    question: "Do I need to be a student to participate?",
    answer:
      "The offer page does not list student status as a requirement. Check the linked terms for current eligibility details.",
  },
  {
    question: "What kind of tasks do I need to complete?",
    answer:
      "The offer describes 3–5 partner deals that must be completed from start to finish. Each partner may have its own terms.",
  },
  {
    question: "Can I claim the reward multiple times?",
    answer:
      "The offer page does not confirm repeat claims. Review the full terms for participation limits.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim a $750 Barnes & Noble Gift Card | Melperk" },
      {
        name: "description",
        content:
          "Discover books, gifts, and more at Barnes & Noble. Complete 3–5 partner offers to qualify for the $750 gift card.",
      },
      { property: "og:title", content: "Claim a $750 Barnes & Noble Gift Card | Melperk" },
      {
        property: "og:description",
        content:
          "Discover books, gifts, and more at Barnes & Noble. Complete 3–5 partner offers to qualify for the $750 gift card.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ClaimButton() {
  return (
    <Button asChild className="claim-button" size="lg">
      <a href={claimUrl} target="_blank" rel="noreferrer">
        Claim Now
      </a>
    </Button>
  );
}

function Index() {
  return (
    <main className="offer-page">
      <div className="offer-layout">
        <header className="brand-panel" aria-label="Barnes & Noble">
          <img className="brand-mark" src={brandLogo.url} alt="Barnes & Noble" />
        </header>

        <section className="offer-intro" aria-labelledby="offer-title">
          <p className="offer-eyebrow">Exclusive Offer</p>
          <h1 className="offer-title" id="offer-title">
            <span>$750 Barnes &amp;</span>
            <span>Noble</span>
            <span>Gift Card</span>
          </h1>
          <p className="offer-description">
            Discover your next favorite books, gifts, and more at Barnes &amp; Noble.
          </p>
          <ClaimButton />
        </section>

        <section className="offer-process" aria-labelledby="process-title">
          <p className="offer-eyebrow">The Process</p>
          <h2 className="section-title" id="process-title">
            How It Works
          </h2>
          <div className="step-list">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article className="step-card" key={number}>
                <span className="step-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div className="step-copy">
                  <p className="step-number">Step {number}</p>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-description">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="offer-disclosure">
            To qualify for your Barnes &amp; Noble gift card, complete 3–5 partner deals from start to
            finish. Once done, your $750 reward is ready to claim.
          </p>
        </section>

        <div className="offer-rating" aria-label="Rated 4.5 out of 5 on Trustpilot">
          <span className="rating-score">4.5 / 5</span>
          <span className="rating-star" aria-hidden="true">
            <Star />
          </span>
          <span className="rating-source">on Trustpilot</span>
        </div>

        <div className="second-claim">
          <ClaimButton />
        </div>

        <section className="offer-faq" aria-labelledby="faq-title">
          <p className="offer-eyebrow">Questions</p>
          <h2 className="section-title" id="faq-title">
            Frequently Asked
          </h2>
          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary className="faq-question">
                  <span>{question}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p className="faq-answer">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="offer-footer">
          <p>Offer eligibility and reward fulfillment are subject to partner terms.</p>
        </footer>
      </div>
    </main>
  );
}