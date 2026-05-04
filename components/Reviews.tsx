import { getPlaceData } from "@/lib/google-places";
import { GOOGLE_PROFILE_URL } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <span
      style={{
        color: "#C97B5A",
        fontSize: 13,
        letterSpacing: "0.08em",
      }}
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
      <span style={{ color: "rgba(43,38,32,0.18)" }}>
        {"★".repeat(5 - count)}
      </span>
    </span>
  );
}

export default async function Reviews() {
  const data = await getPlaceData();

  return (
    <section
      id="reviews"
      className="section"
      style={{ background: "#F5EFE6" }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56 }}>
          <span>05 · From students</span>
        </div>

        <div
          className="reveal reviews-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 60,
            alignItems: "end",
            marginBottom: 64,
          }}
        >
          <h2
            className="h-serif"
            style={{ fontSize: "clamp(40px, 5.6vw, 72px)" }}
          >
            Words from{" "}
            <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
              the mat.
            </span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 14,
              color: "#7A6F62",
            }}
          >
            <Stars count={Math.round(data.rating)} />
            <div>
              <span
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontSize: 22,
                  color: "#2B2620",
                  letterSpacing: "-0.01em",
                }}
              >
                {data.rating.toFixed(1)}
              </span>{" "}
              · {data.totalReviews} reviews on Google
            </div>
          </div>
        </div>

        <div
          className="reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {data.reviews.slice(0, 3).map((r, i) => (
            <article
              key={i}
              className="reveal"
              style={{
                background: "#fff",
                border: "1px solid rgba(43,38,32,0.12)",
                borderRadius: 20,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <Stars count={r.rating} />
              <p
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontStyle: "italic",
                  fontWeight: 350,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "#2B2620",
                  flex: 1,
                  letterSpacing: "-0.005em",
                  textWrap: "pretty",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div
                style={{
                  paddingTop: 14,
                  borderTop: "1px solid rgba(43,38,32,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#2B2620",
                    fontWeight: 500,
                  }}
                >
                  {r.authorName}
                </div>
                <div style={{ fontSize: 12, color: "#7A6F62", marginTop: 4 }}>
                  {r.authorBadge ? `${r.authorBadge} · ` : ""}
                  {r.relativeTime}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
          >
            Read more on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
