using AutoMapper;
using Domain;

namespace Application.Activities;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        //CreateMap<MapFrom, MapTo>
        CreateMap<Activity, Activity>();
    }
}