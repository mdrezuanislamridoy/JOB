import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Loading from "../../components/styling/Loading";

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Hero></Hero>
    </div>
  );
}
