"use client";

import { useEffect, useState } from "react";

import KudosController from "@/domain/controller/Kudos";
import { KudosModelType } from "@/domain/models/Kudos";
import useAuth from "@/app/hooks/useAuth";

export const useKudos = ({
  panelSlug,
  kudoSlug,
}: {
  panelSlug?: string;
  kudoSlug?: string;
}) => {
  const [kudos, setKudos] = useState<KudosModelType[]>([]);

  const { getUser } = useAuth();
  const controller = new KudosController();

  useEffect(() => {
    if (!panelSlug) {
      return;
    }

    const getKudos = async () => {
      const response = await controller.getKudos({
        userId: getUser()?.userId,
        panelSlug,
      });

      setKudos(response);
    };

    getKudos();
  }, []);

  const getKudo = () => {
    if (kudos.length <= 0) {
      return;
    }

    const kudo = kudos.filter((kudo) => kudo.slug === kudoSlug);

    if (kudo.length <= 0) {
      return;
    }

    return kudo[0];
  };

  return { kudos, getKudo };
};
