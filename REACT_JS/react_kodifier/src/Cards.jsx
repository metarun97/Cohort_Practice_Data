import TestimonialCard from './components/TestimonialCard';
import testimonials from './data/testimonial.json';
import styles from './components/cards.module.css';

const Cards = () => {
  console.log(testimonials);
  return (
    <div>
      <h2>Our studenst says</h2>
      <div className={styles.cardSection}>
        {testimonials.map(
          ({
            id,
            name,
            avatar,
            role,
            message,
            isVerified,
            extra,
            children,
          }) => {
            // const { id, name, avatar, role, message, isVerified } = currElem;
            return (
              <TestimonialCard
                key={id}
                name={name}
                avatar={avatar}
                role={role}
                message={message}
                isVerified={isVerified}
              >
                {extra}
              </TestimonialCard>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Cards;
