"use client";
import { useMemo, useState } from "react";
import UserRentModal from "../hooks/userRentModal";
import Modal from "./Modals";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../input/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../input/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../input/Counter";
import ImageUpload from "../input/ImageUpload";
import Input from "../input/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = UserRentModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const guestCount = watch("guestCount");
  const imageSrc = watch("imageSrc");

  const onNext = () => {
    setStep((currentStep) => {
      const nextStep = currentStep + 1;
      const isBeyondLastStep = nextStep > STEPS.PRICE;
      return isBeyondLastStep ? currentStep : nextStep;
    });
  };

  const onBack = () => {
    setStep((currentStep) => {
      const previousStep = currentStep - 1;
      const isBelowFirstStep = previousStep < STEPS.CATEGORY;
      return isBelowFirstStep ? currentStep : previousStep;
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }
    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Listing created successfully!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        // rentModal.onClose();
        toast.error("something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const Map = useMemo(
    () => dynamic(() => import("../Map"), { ssr: false }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subTitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              icon={item.icon}
              selected={category === item.label}
              label={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subTitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subTitle="What amenities do you have?"
        />
        <Counter
          title="Guests"
          value={guestCount}
          subtitle="How many guest do you allow?"
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Rooms"
          value={roomCount}
          subtitle="How many rooms do you have?"
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          value={bathroomCount}
          subtitle="How many bathrooms do you have?"
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subTitle="Show guests what your place looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your place"
          subTitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="title"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
        <hr />
        <Input
          id="description"
          label="description"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your place?"
          subTitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="price"
          formatPrice
          type="number"
          required
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Airbnb Your Home"
      onSubmit={handleSubmit(onSubmit)}
      onClose={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModal;
