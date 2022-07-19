'reach 0.1';

const MUInt = Maybe(UInt);
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const common = {
    get: Fun([], UInt),
    check: Fun([MUInt, MUInt], Null),
  };
  const autobotInteract = {
    ...common,
  };
  const decepticonInteract = {
    ...common,
  };
  const A = Participant('Autobot', autobotInteract);
  const B = Participant('Decepticon', decepticonInteract);
  init();

  A.publish();
  const m = new Map(UInt);
  commit();

  A.only(() => {
    const a = declassify(interact.get());
    const ap = a;
  });
  A.publish(a, ap);
  m[A] = a;
  require(m[A] == MUInt.Some(ap), "m[A] is Some(ap)");
  delete m[A];
  commit();

  // B.only(() => {
  //   const d = declassify(interact.get());
  //   const de = d;
  // });
  // B.publish(d, de);
  // commit();

  exit();
});