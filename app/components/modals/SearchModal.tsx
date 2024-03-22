<<<<<<< HEAD
'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
=======
"use client";

import qs from "query-string";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { formatISO } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
<<<<<<< HEAD
import CountrySelect, { 
  CountrySelectValue
} from "../inputs/CountrySelect";
import Heading from '../Heading';
=======
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Heading from "../Heading";
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
<<<<<<< HEAD
    key: 'selection'
  });

  const Map = useMemo(() => dynamic(() => import('../Map'), { 
    ssr: false 
  }), [location]);
=======
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    []
  );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
<<<<<<< HEAD
      currentQuery = qs.parse(params.toString())
=======
      currentQuery = qs.parse(params.toString());
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
<<<<<<< HEAD
      bathroomCount
=======
      bathroomCount,
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

<<<<<<< HEAD
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });
=======
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
<<<<<<< HEAD
  }, 
  [
    step, 
    searchModal, 
    location, 
    router, 
    guestCount, 
=======
  }, [
    step,
    searchModal,
    location,
    router,
    guestCount,
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
    roomCount,
    dateRange,
    onNext,
    bathroomCount,
<<<<<<< HEAD
    params
=======
    params,
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
<<<<<<< HEAD
      return 'Search'
    }

    return 'Next'
=======
      return "Search";
    }

    return "Next";
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
<<<<<<< HEAD
      return undefined
    }

    return 'Back'
=======
      return undefined;
    }

    return "Back";
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
<<<<<<< HEAD
      <CountrySelect 
        value={location} 
        onChange={(value) => 
          setLocation(value as CountrySelectValue)} 
=======
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </div>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
<<<<<<< HEAD
        <Heading
          title="More information"
          subtitle="Find your perfect place!"
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Guests" 
          subtitle="How many guests are coming?"
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Rooms" 
          subtitle="How many rooms do you need?"
        />        
        <hr />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
=======
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests are coming?"
        />
        <hr />
        <Counter
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you need?"
        />
        <hr />
        <Counter
          onChange={(value) => {
            setBathroomCount(value);
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
          }}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bahtrooms do you need?"
        />
      </div>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 7264c7c6919375d18f9fd8c98685243ca62fd08b

export default SearchModal;
